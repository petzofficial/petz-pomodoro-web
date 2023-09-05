import { IoAddCircle, IoCloseCircle } from "solid-icons/io";
import { projects, todos } from "../../store";
import { createMutable } from "solid-js/store";

const inputbox = createMutable({
  show: false,
  priority: "low",
});

function NewTodoBtn() {
  return (
    <button
      class="newTodoBtn"
      onClick={() => inputbox.show = true}
    >
      <IoAddCircle size={21} weight="fill" /> Todo
    </button>
  );
}

function TodoInput() {
  let todo = {
    name: "",
    note: "",
    priority: "low",
    finished: false,
    project: "Today",
  };

  function saveTodo(todo) {
    let invalidTodo = false;
    let errMessage;

    todos.list.forEach((i) => {
      if (i.name == todo.name.trim()) {
        invalidTodo = true;
        errMessage = "avoid making duplicate!";
        return;
      }
    });

    if (invalidTodo) {
      alert(errMessage);
      return;
    }

    todo.project = projects.clickedProject;
    todos.list.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos.list));

    inputbox.show = false;
  }

  return (
    <form action="" method="get" class="todoInput">
      <IoCloseCircle
        size={20}
        weight="fill"
        class="closeTodoInput"
        onClick={() => inputbox.show = false}
      />

      <label for="todo-name" style={{ display: "none" }}></label>
      <input
        id="todo-name"
        name="todo-name"
        placeholder="name"
        onChange={(e) => todo.name = e.target.value}
      />

      <label for="todo-note" style={{ display: "none" }}></label>
      <textarea
        id="todo-note"
        name="todo-note"
        placeholder="note"
        onChange={(e) => todo.note = e.target.value}
      >
      </textarea>

      <div style={{ display: "flex", gap: ".5rem" }}>
        <div class="todoPriority">
          <label for="priority">priority</label>

          <select
            id="priority"
            name="priority"
            onClick={(e) => todo.priority = e.target.value}
          >
            <option value="low">low</option>
            <option value="high">high</option>
          </select>
        </div>

        <button class="newProjectBtn" onClick={() => saveTodo(todo)}>
          save
        </button>
      </div>
    </form>
  );
}

export default () => {
  return (
    <div class="todoCreator">
      {inputbox.show &&
        <TodoInput />}
      <NewTodoBtn />
    </div>
  );
};
