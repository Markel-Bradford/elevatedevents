"use client";  // Add this line at the top of your component file

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";


const EmailBtn: React.FC = () => {
  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Markel',
                to: 'markel.bradford94@gmail.com',
                subject: 'Package Info',
                intro: 'Thanks for contacting Elevated Events',
                content: 'Hello, I would like to know more about your silver event. I look forward to hearing from you soon!'
            }),
        });
        if (response.ok) {
            alert('Email sent successfully')
        } else {
            alert('Failed to send email.')
        }
    } catch (error) {
        console.error('Error sending email:', error)
        alert('Failed to send email.')
    }
  }

  return (  
    <div className="flex bg-black relative items-center justify-center">
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-amber-400 p-4 font-semibold text-lg shadow-slate-200 shadow-sm hover:scale-105"
      >
        Request More Info
      </button>
</div>
  );
};

export default EmailBtn;
