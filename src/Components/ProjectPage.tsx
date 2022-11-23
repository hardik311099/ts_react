import React, { useState, useEffect, Fragment } from "react";

// import { MOCK_PROJECT } from "./MockProject";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";

import ProjectList from "./ProjectList";

function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  // let id = Number(params.id);
  // Approach 2 : using async/await
  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        // setError("");
        // setProjects(data);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);
  // useEffect(() => {
  //   setLoading(true);
  //   projectAPI
  //     .find(id)
  //     .then((d) => {
  //       setProjects(d);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setError(e);
  //       setLoading(false);
  //     });
  // }, [id]);

  const saveProject = (project: Project) => {
    // console.log("Saving project:", project);
    // let updatedProjects = projects.map((p: Project) => {
    //   return p.id === project.id ? project : p;
    // });
    // setProjects(updatedProjects);
    projectAPI
      .put(project)
      .then((updateProject) => {
        let updatedProjects = projects.map((p: Project) => {
          return p.id === project.id ? new Project(updateProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message);
        }
      });
  };

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  return (
    <Fragment>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse"></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <h1>Project</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECT, null, "")}</pre> */}
      {projects && <ProjectList projects={projects} onSave={saveProject} />}
      {!loading && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span> <p>Loading...</p>
        </div>
      )}
    </Fragment>
  );
}

export default ProjectPage;
