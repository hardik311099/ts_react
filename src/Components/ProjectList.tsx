import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectFrom from "./ProjectFrom";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  //   return <pre>{JSON.stringify(projects, null, "")}</pre>;
  return (
    <ul className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project} />
          <ProjectFrom />
        </div>
      ))}
    </ul>
  );
}

export default ProjectList;
