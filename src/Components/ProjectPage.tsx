import React, { useState } from "react";
import { MOCK_PROJECT } from "./MockProject";
import { Project } from "./Project";

import ProjectList from "./ProjectList";

function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECT);
  const saveProject = (project: Project) => {
    // console.log("Saving project:", project);
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };
  return (
    <>
      <h1>Project</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECT, null, "")}</pre> */}
      <ProjectList projects={projects} onSave={saveProject} />
    </>
  );
}

export default ProjectPage;
