import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectFrom from "./ProjectFrom";

interface ProjectListProps {
  projects: Project[];
}

const handleEdit = (project: Project) => {
  console.log(project);
};
function ProjectList({ projects }: ProjectListProps) {
  //   return <pre>{JSON.stringify(projects, null, "")}</pre>;
  return (
    <ul className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard onEdit={handleEdit} project={project} />
          <ProjectFrom />
        </div>
      ))}
    </ul>
  );
}

export default ProjectList;
