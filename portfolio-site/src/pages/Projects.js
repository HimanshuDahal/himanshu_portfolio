import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
