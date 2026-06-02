import { NextResponse } from "next/server";
import { sheets, auth } from "@googleapis/sheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, propertyType, action, project, message, sourcePage } = body;

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

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error saving lead to Google Sheets:", error);
    return NextResponse.json({
      error: "Failed to save lead",
      details: error.message || String(error)
    }, { status: 500 });
  }
}
