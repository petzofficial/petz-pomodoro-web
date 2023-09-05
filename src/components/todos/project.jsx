// basically project name on the sidebar

import { IoCloseCircle } from "solid-icons/io";
import { projects, todos } from "../../store";

function getColor(x) {
  return `var(--${x})`;
}

const removeProjectTodos = (project) => {
  for (let i = 0; i < todos.list.length; i++) {
    if (todos.list[i].project == project) {
      todos.list.splice(i, 1);
      i--;
    }
  }

  localStorage.setItem("todos", JSON.stringify(todos.list));
};

const removeProject = (item) => {
  const index = projects.list.indexOf(item);

  projects.list.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects.list));

  removeProjectTodos(item);
};

export default (props) => {
  return (
    <div
      class={projects.clickedProject == props.name
        ? "todoProject todoProjectClicked"
        : "todoProject"}
      onClick={() => projects.clickedProject = props.name}
    >
      <div class="projectName">
        <props.icon
          size={19}
          style={{ color: getColor(props.color) }}
        />
        {props.name}
      </div>

      {/*show delete icon on user added todos only!*/}

      {(projects.clickedProject == props.name && props.name != "Today" &&
        props.name != "Important" && props.name != "Low priority") &&
        (
          <IoCloseCircle
            size={19}
            weight="fill"
            style={{ color: "var(--red)" }}
            onClick={() => removeProject(props.name)}
          />
        )}
    </div>
  );
};

export { removeProjectTodos };
