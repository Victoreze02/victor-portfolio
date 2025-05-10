import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // const handleSend = () => {
  //   const subject = encodeURIComponent(`Message from ${name}`);
  //   const body = encodeURIComponent(message);
  //   window.location.href = `mailto:https://mail.google.com/mail/u/0/#inbox?compose=new ? subject=${subject}&body=${body}`;
  // };


  return (
     <section id="contact">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Contact Me</h2>
       <div className="mb-4">
        <label className="block mb-1 font-medium">Your Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          className="w-full p-2 border rounded"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        ></textarea>
      </div>

      <button
        // onClick={handleSend}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      ><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">Send</a>
      </button>
    </section>
  );
}