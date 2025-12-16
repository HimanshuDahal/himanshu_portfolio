import React from "react";

function Resume() {
  return (
    <div className="container mt-5">
      <h2>Resume</h2>
      <p>Download or view my resume below:</p>
      <a href="/resume.pdf" download className="btn btn-primary mb-3">
        Download Resume
      </a>
      <iframe
        src="/Himanshu_Dahal_Resume.pdf"
        title="Resume"
        width="100%"
        height="600px"
        className="resume-frame"
      />
    </div>
  );
}
export default Resume;
