import React, { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFromProps {
  project: Project;
  onSave: (project: Project) => void;
  onCancle: () => void;
}

function ProjectFrom({
  onSave,
  onCancle,
  project: initialProject,
}: ProjectFromProps) {
  const [project, setProject] = useState(initialProject);

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;

    let updateValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updateValue = Number(updateValue);
    }

    const change = {
      [name]: updateValue,
    };

    let updateProject: Project;

    setProject((p) => {
      updateProject = new Project({ ...p, ...change });
      return updateProject;
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // onSave(new Project({ name: "Update Project" }));
    onSave(project);
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        value={project.name}
        onChange={handleChange}
        placeholder="enter name"
      />
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        value={project.description}
        onChange={handleChange}
        placeholder="enter description"
      />
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        value={project.budget}
        onChange={handleChange}
        placeholder="enter budget"
      />
      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        checked={project.isActive}
        onChange={handleChange}
        name="isActive"
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancle}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectFrom;
