import "../../css/todos/sidebar.css";

import { IoAddCircle, IoCloseCircle } from "solid-icons/io";

import { projects } from "../../store";
import ProjectLists from "./projectList";

function showInput(tmp) {
  projects.showInputBox = (tmp) ? true : false;
}

// input field for adding new projects
function ProjectInput() {
  let tmpProject;

  function addProject() {
    if (!tmpProject || projects.list.includes(tmpProject)) {
      alert("invalid project name!");
      return;
    }

    projects.list.push(tmpProject);
    localStorage.setItem("projects", JSON.stringify(projects.list));
    showInput(false);
  }

  return (
    <form action="" method="get" class="projectInput">
      <input
        type="text"
        placeholder="project name"
        maxLength={17}
        onChange={(e) => tmpProject = e.target.value}
      />

      <div class="projectInputBtns">
        <button onClick={() => addProject()}>
          save
        </button>

        <IoCloseCircle
          class="closeProjectInput"
          size={20}
          weight="fill"
          onClick={() => showInput(false)}
        />
      </div>
    </form>
  );
}

export default () => {
  return (
    <div class="sidebar">
      <div class="projects">
        <ProjectLists />
      </div>

      <div style={{ position: "relative" }}>
        {projects.showInputBox &&
          <ProjectInput closeInput={() => showInput(false)} />}

        <button class="newProjectBtn" onClick={() => showInput(true)}>
          <IoAddCircle size={21} weight="fill" /> Project
        </button>
      </div>
    </div>
  );
};
