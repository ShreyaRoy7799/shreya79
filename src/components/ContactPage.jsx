import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form to the server
    console.log(name, email, message);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;