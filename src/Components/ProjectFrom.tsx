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

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });

  function validate(project: Project) {
    let errors: any = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters.";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required.";
    }
    if (project.budget === 0) {
      errors.budget = "Budget must be more than $0.";
    }
    return errors;
  }
  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

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
    setErrors(() => validate(updateProject));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
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
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        value={project.description}
        onChange={handleChange}
        placeholder="enter description"
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        value={project.budget}
        onChange={handleChange}
        placeholder="enter budget"
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}
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
