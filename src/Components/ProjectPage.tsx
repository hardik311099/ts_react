import React from "react";
import { MOCK_PROJECT } from "./MockProject";
import { Project } from "./Project";

import ProjectList from "./ProjectList";

function ProjectPage() {
  const saveProject = (project: Project) => {
    console.log("Saving project:", project);
  };
  return (
    <>
      <h1>Project</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECT, null, "")}</pre> */}
      <ProjectList projects={MOCK_PROJECT} onSave={saveProject} />
    </>
  );
}

export default ProjectPage;
