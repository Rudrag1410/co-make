"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CountryCodeSelect } from "@/components/CountryCodeSelect";

interface InquiryPayload {
  title?: string;
  name?: string;
  developer?: string;
  pdfs?: string[];
  pdf?: string | null;
}

export function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const [pendingPayload, setPendingPayload] = useState<unknown>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+971");
  const [phone, setPhone] = useState("");

  // Toast State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Sheet Submission Helper
  const sendLeadToSheet = async (name: string, cCode: string, phoneNumber: string, action: string, project: string) => {
    console.log("Submitting Lead Data:", { name, countryCode: cCode, phone: phoneNumber, action, project });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          countryCode: cCode,
          phone: phoneNumber,
          action: action,
          project: project,
          sourcePage: window.location.pathname,
        }),
      });
      if (!response.ok) {
        console.error("Failed to submit lead to spreadsheet");
      }
    } catch (err) {
      console.error("Error submitting lead to spreadsheet", err);
    }
  };

  // Helper to extract clean project/developer details for the Google Sheet
  const getProjectContext = (action: string | null, payload: unknown): string => {
    const payloadObj = payload as InquiryPayload;
    if (payloadObj) {
      const developerName = payloadObj.developer || (action?.startsWith("hero") ? "DANUBE" : "");
      const titleName = payloadObj.title || payloadObj.name || "";
      if (developerName && titleName) {
        return `${developerName} - ${titleName}`;
      } else if (developerName) {
        return `${developerName} Project`;
      } else if (titleName) {
        return titleName;
      }
    } else if (action?.startsWith("hero")) {
      return "DANUBE - Greenz by Danube (Hero)";
    }
    return "General";
  };

  useEffect(() => {
    // Listen for global custom trigger events to open the callback popup
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      const action = customEvent.detail?.action;
      const payload = customEvent.detail?.payload;

      setIsOpen(true);
      setHasSeen(true);
      if (customEvent.detail?.action) {
        setPendingAction(customEvent.detail.action);
        setPendingPayload(customEvent.detail.payload);
      } else {
        setPendingAction(null);
        setPendingPayload(null);
      }
    };
    window.addEventListener("open-inquiry-popup", handleOpen);

    // Only show once per session automatically
    let timer: NodeJS.Timeout;
    const alreadySubmitted = typeof window !== "undefined" && sessionStorage.getItem("co-make-lead-submitted") === "true";
    if (!hasSeen && !alreadySubmitted) {
      timer = setTimeout(() => {
        setIsOpen(true);
        setHasSeen(true);
      }, 5000); // 5 seconds
    }

    return () => {
      window.removeEventListener("open-inquiry-popup", handleOpen);
      if (timer) clearTimeout(timer);
    };
  }, [hasSeen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    // Save to sessionStorage
    sessionStorage.setItem("co-make-lead-submitted", "true");
    sessionStorage.setItem("co-make-lead-name", fullName);
    sessionStorage.setItem("co-make-lead-phone", phone);

    // Send lead to Google Sheets
    const projectContext = getProjectContext(pendingAction, pendingPayload);
    sendLeadToSheet(
      fullName,
      countryCode,
      phone,
      pendingAction || "General Callback",
      projectContext
    );

    // Show success toast
    setToastMessage("Thank you! Your request has been successfully submitted.");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);

    setIsOpen(false);

    // Dispatch success if there was a pending action
    if (pendingAction) {
      window.dispatchEvent(
        new CustomEvent("inquiry-success", {
          detail: { action: pendingAction, payload: pendingPayload },
        })
      );
    }

    // Reset state
    setPendingAction(null);
    setPendingPayload(null);
    setFullName("");
    setPhone("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Header */}
              <div className="bg-slate-950 p-6 text-center relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-white/50 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative h-12 w-auto flex items-center justify-center mb-3">
                  <Image
                    src="/comake-home-logo.png"
                    alt="Co-Make Homes Logo"
                    width={140}
                    height={35}
                    className="h-9 w-auto object-contain brightness-110"
                    priority
                  />
                </div>
                <h3 className="text-white font-sans text-2xl font-extrabold mb-1 leading-tight tracking-tight">
                  Get a call within <br /> few minutes 📞
                </h3>
                <p className="text-gold text-[10px] uppercase tracking-widest font-extrabold mt-2">
                  Fast & Direct Assistance
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6">
                <p className="text-slate-600 text-sm text-center mb-6">
                  {pendingAction ? "Please leave your details to proceed instantly!" : "Leave your number below and we will call you right away!"}
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-[35%]">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1">
                        Country Code
                      </label>
                      <div className="relative">
                        <CountryCodeSelect
                          value={countryCode}
                          onChange={setCountryCode}
                          className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all shadow-none"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="50 123 4567"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-slate-950 font-bold rounded-xl py-6 tracking-widest text-[10px] uppercase mt-2 group"
                  >
                    {pendingAction ? "PROCEED NOW" : "REQUEST CALLBACK"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                <p className="text-center text-slate-400 text-[9px] mt-4">
                  We respect your privacy. No spam.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[999999] flex items-center gap-3 bg-slate-900 border border-gold/30 text-white px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-md max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gold">Success</h4>
              <p className="text-[11px] text-white/70 mt-0.5">{toastMessage}</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-auto text-white/40 hover:text-white transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
