import React from "react";
import { MOCK_PROJECT } from "./MockProject";

import ProjectList from "./ProjectList";

function ProjectPage() {
  return (
    <>
      <h1>Project</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECT, null, "")}</pre> */}
      <ProjectList projects={MOCK_PROJECT} />
    </>
  );
}

export default ProjectPage;
