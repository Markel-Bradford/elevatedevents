"use client";
import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("Request for more information")
  const [body, setBody] = useState("Hello, Felicia, \n\nMy name is (your name) and I am interested in your services. I would like to connect with you to learn more about your packages and pricing. My email is (your email here). I look forward to hearing from you soon!")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      // FormData will automatically set the content type to multipart/form-data
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData, // Directly use FormData as the request body
      });

      if (response.ok) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Error sending email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Error sending email.");
    }
  };

  return (
    <div className="min-h-[100vh]">
      <h1 className="text-center max-lg:py-3 py-12 px-3 text-2xl lg:text-6xl animate-fadein font-kalnia">
        Contact Us
      </h1>
      <div className="flex flex-col items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full min-w-[360px] max-w-[500px] px-5 gap-2 mt-12"
        >
          <label htmlFor="subject" className="text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="text-black px-2 border-2 border-solid border-amber-400"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <label htmlFor="text" className="text-white">
            Body
          </label>
          <textarea
            name="text"
            id="text"
            className="h-36 text-black p-2 whitespace-pre text-wrap border-2 border-solid border-amber-400"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="border-2 border-solid border-amber-400 w-[120px] p-2 text-xl mx-auto mt-5 hover:bg-green-600 transition-colors5"
          >
            Send Email
          </button>
          {message && <p className="text-center mt-5 text-lg">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
