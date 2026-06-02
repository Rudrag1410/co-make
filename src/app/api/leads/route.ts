import { NextResponse } from "next/server";
import { sheets, auth } from "@googleapis/sheets";
import { DuoChatClient, LeadSource } from "@duochat/sdk";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, countryCode, phone, propertyType, action, project, message, sourcePage } = body;

    let readableLocation = sourcePage || "";
    if (readableLocation === "/") readableLocation = "Home Page";
    else if (readableLocation === "/contact") readableLocation = "Contact Page";
    else if (readableLocation === "/about") readableLocation = "About Page";
    else if (readableLocation === "/areas") readableLocation = "Areas Page";
    else if (readableLocation.startsWith("/property/")) readableLocation = "Property Page";
    else if (readableLocation.startsWith("/projects/")) readableLocation = "Project Page";

    // Use environment variables for authentication
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.warn("Google Sheets credentials are not fully configured in environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Handle escaped newlines in private key from environment variables
    privateKey = privateKey.replace(/\\n/g, "\n");

    const googleAuth = new auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheetsAPI = sheets({ version: "v4", auth: googleAuth });

    const timestamp = "'" + new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" });
    const rowData = [
      timestamp,
      name || "",
      email || "",
      countryCode ? "'" + countryCode : "'+971",
      phone || "",
      propertyType || "",
      action || "",
      project || "",
      readableLocation, // Location with Readable Name
      message || ""
    ];

    await sheetsAPI.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: "Sheet1!A1", // Append to the "Sheet1" tab
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowData],
      },
    });

    // Create Lead via DuoChat
    const duoApiKey = process.env.DUOCHAT_API_KEY;

    if (duoApiKey) {
      try {
        const duo = new DuoChatClient({ apiKey: duoApiKey });

        await duo.createLead({
          name: name || undefined,
          email: email || undefined,
          countryCode: countryCode ? countryCode.replace('+', '') : undefined,
          phoneNumber: phone || undefined,
          source: LeadSource.SDK,
          // customFields: [
          //   { fieldId: "propertyType", value: propertyType || "N/A" },
          //   { fieldId: "project", value: project || "N/A" },
          //   { fieldId: "action", value: action || "N/A" },
          //   { fieldId: "sourcePage", value: readableLocation || "N/A" }
          // ]
        });
        console.log("Lead created successfully via DuoChat");
      } catch (duoError) {
        console.error("Failed to create lead via DuoChat:", duoError);
      }
    } else {
      console.log("Skipping DuoChat lead creation: DUOCHAT_API_KEY not set.");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error saving lead to Google Sheets:", error);
    return NextResponse.json({
      error: "Failed to save lead",
      details: error.message || String(error)
    }, { status: 500 });
  }
}
