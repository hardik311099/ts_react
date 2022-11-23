import React from "react";
import { Project } from "./Project";

interface ProjectDetailProps {
  projects: Project;
}
export default function ProjectDetail({ projects }: ProjectDetailProps) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img
            className="rounded"
            src={projects.imageUrl}
            alt={projects.name}
          />
          <section className="section dark">
            <h3 className="strong">
              <strong>{projects.name}</strong>
            </h3>
            <p>{projects.description}</p>
            <p>Budget : {projects.budget}</p>

            <p>Signed: {projects.contractSignedOn.toLocaleDateString()}</p>
            <p>
              <mark className="active">
                {projects.isActive ? "active" : "inactive"}
              </mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
