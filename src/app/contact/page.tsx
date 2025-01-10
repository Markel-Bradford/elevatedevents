"use client";
import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = JSON.stringify({
      from: formData.get('from'),
      to: formData.get('to'),
      subject: formData.get('subject'),
      text: formData.get('text')
    })

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body
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
          className="flex flex-col min-w-[360px] max-w-[600px] px-5 gap-2 mt-12">
          <label htmlFor="from" className="text-white">
            From
          </label>
          <input
            type="email"
            id="from"
            name="from"
            className="text-black px-2"
            placeholder="youremail@domain.com"
            required
          />
          <label htmlFor="to" className="text-white">
            To
          </label>
          <input
            type="email"
            id="to"
            name="to"
            className="text-black px-2"
            defaultValue={"markel.bradford94@gmail.com"}
            readOnly
          />
          <label htmlFor="subject" className="text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="text-black px-2"
            defaultValue={"Request for more information"}
            required
          />
          <label htmlFor="text" className="text-white">
            Body
          </label>
          <textarea
            name="text"
            id="text"
            className="h-36 text-black p-2 whitespace-pre text-wrap"
            defaultValue={
              "Hello, Felicia, \n\nMy name is ____ and I am interested in your services. I would like to connect with you to learn more about your packages and pricing. "
            }
            required></textarea>
          <button
            type="submit"
            className="border-2 border-solid border-amber-400 w-[120px] p-2 text-xl mx-auto mt-5 hover:bg-green-600 transition-colors5">
            Send Email
          </button>
          {message && <p className="text-center mt-5 text-lg">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
