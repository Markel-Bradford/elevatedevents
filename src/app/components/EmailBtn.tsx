"use client"; // Add this line at the top of your component file

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const EmailBtn: React.FC = () => {
  const pathname = usePathname();

  const handleSubmit = async () => {
    let emailDetails;

    switch (pathname) {
      case "/silver":
        emailDetails = {
          name: "Markel",
          to: "markel.bradford94@gmail.com",
          subject: "Package Info",
          intro: "Thanks for contacting Elevated Events",
          content:
            "Hello, I would like to know more about your silver event package. I look forward to hearing from you soon!",
        }
        break

        case "/gold":
        emailDetails = {
          name: "Markel",
          to: "markel.bradford94@gmail.com",
          subject: "Package Info",
          intro: "Thanks for contacting Elevated Events",
          content:
            "Hello, I would like to know more about your gold event package. I look forward to hearing from you soon!",
        }
        break

        case "/platinum":
        emailDetails = {
          name: "Markel",
          to: "markel.bradford94@gmail.com",
          subject: "Package Info",
          intro: "Thanks for contacting Elevated Events",
          content:
            "Hello, I would like to know more about your platinum event package. I look forward to hearing from you soon!",
        }
        break
    }
    
    try {
      const r = await fetch("/api/sendemail", {
        
        method: "POST",
        body: JSON.stringify(emailDetails),
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
