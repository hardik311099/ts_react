import React, { useEffect, useState } from "react";
import { projectAPI } from "./projectAPI";
import ProjectDetail from "./ProjectDetail";
import { Project } from "./Project";
import { useParams } from "react-router-dom";

function ProjectPage() {
  const [projects, setProjects] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const params = useParams();
  const id = Number(params.id);
  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.find(id);
        // setError("");
        // setProjects(data);
        console.log(data);

        setProjects(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [id]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {/* <ProjectDetail projects={projects} /> */}
        {projects && <ProjectDetail projects={projects} />}
      </>
    </div>
  );
}

export default ProjectPage;
