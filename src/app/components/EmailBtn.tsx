"use client"; // Add this line at the top of your component file

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const EmailBtn: React.FC = () => {
  const pathname = usePathname();

  const handleSubmit = async () => {
    try {
      const r = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          name: "Markel",
          to: "markel.bradford94@gmail.com",
          subject: "Package Info",
          intro: "Thanks for contacting Elevated Events",
          content:
            "Hello, I would like to know more about your silver event. I look forward to hearing from you soon!",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await r.json();

      if (res.success) {
        alert("Email sent successfully");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Failed to send email.");
    }
  };

  return (
    <div className="flex bg-black relative items-center justify-center">
      <button
        onClick={handleSubmit}
        className="bg-amber-400 p-4 font-semibold text-lg shadow-slate-200 shadow-sm hover:scale-105">
        Request More Info
      </button>
    </div>
  );
};

export default EmailBtn;
