import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Himanshu Dahal — BSIT Student & Cybersecurity Enthusiast</h1>
      <p className="lead mt-3">
        I build clean, reliable web apps with professional polish.
      </p>
      <div className="mt-4">
        <Link to="/projects" className="btn btn-primary me-2">
          View Projects
        </Link>
        <Link to="/resume" className="btn btn-outline-light me-2">
          Resume
        </Link>
        <Link to="/contact" className="btn btn-outline-light">
          Contact
        </Link>
      </div>
    </div>
  );
}
export default Home;
