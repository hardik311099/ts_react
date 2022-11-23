import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectFrom from "./ProjectFrom";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
    console.log(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  //   return <pre>{JSON.stringify(projects, null, "")}</pre>;
  return (
    <ul className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectFrom onCancle={cancelEditing} />
          ) : (
            <ProjectCard onEdit={handleEdit} project={project} />
          )}
        </div>
      ))}
    </ul>
  );
}

export default ProjectList;
