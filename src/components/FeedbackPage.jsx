import React from 'react';
import './FeedbackPage.css';

function FeedbackPage() {
  return (
    <div className="feedback-page">
      <h1>Feedback</h1>
      <form className="feedback-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackPage;


