import TodoCreator from "./todoCreator";
import TodoList from "./todoList";
import { RemoveAllTodos } from "./todoBtns";
import { projects } from "../../store";

export default () => {
  return (
    <main class="todoSection">
      <TodoList />

      <div class="todoFooter">
        {(projects.clickedProject != "Important" &&
          projects.clickedProject != "Low priority") &&
          (
            <>
              <RemoveAllTodos />
              <TodoCreator />
            </>
          )}
      </div>
    </main>
  );
};
