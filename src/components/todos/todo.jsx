import { BsBookmarkStarFill, BsCheckCircleFill } from "solid-icons/bs";

import { FaRegularCircle } from "solid-icons/fa";
import { IoCloseCircle } from "solid-icons/io";

import { todos } from "../../store";

const FinishedStatus = (todoname, action, val) => {
  for (let i = 0; i < todos.list.length; i++) {
    if (todos.list[i].name == todoname) {
      if (action == "set") {
        todos.list[i].finished = val;
        localStorage.setItem("todos", JSON.stringify(todos.list));
      }
      return todos.list[i].finished;
    }
  }
};

const removeTodo = (name) => {
  todos.list.forEach((todo, i) => {
    if (todo.name == name) {
      todos.list.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(todos.list));
    }
  });
};

export default (props) => {
  return (
    <div class="todo">
      <div
        class={FinishedStatus(props.name, "get")
          ? "todoTitle checkedTodo"
          : "todoTitle"}
      >
        {props.name}
      </div>
      <div
        class={FinishedStatus(props.name, "get") ? "todoNote checkedTodo"
        : "todoNote"}
      >
        {props.note}
      </div>

      <div style={{ display: "flex", "justify-content": "space-between" }}>
        <div>
          {!FinishedStatus(props.name, "get")
            ? (
              <FaRegularCircle
                weight="bold"
                size={18}
                onClick={() => FinishedStatus(props.name, "set", true)}
                class="unchecked"
              />
            )
            : (
              <BsCheckCircleFill
                weight="fill"
                size={20}
                onClick={() => FinishedStatus(props.name, "set", false)}
                class="checked"
              />
            )}
          <IoCloseCircle
            weight="fill"
            size={20}
            class="closeTodoBtn"
            onClick={() => removeTodo(props.name)}
          />
        </div>

        {(props.priority == "high") &&
          (
            <BsBookmarkStarFill
              weight="fill"
              size={20}
              style={{ color: "var(--green)" }}
            />
          )}
      </div>
    </div>
  );
};
