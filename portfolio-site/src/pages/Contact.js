import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent! (Demo only)");
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
      {status && <div className="alert alert-success mt-3">{status}</div>}
    </div>
  );
}
export default Contact;
