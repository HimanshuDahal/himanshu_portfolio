import React from "react";

function ProjectCard({ title, description, demoUrl, repoUrl }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                className="btn btn-secondary btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
