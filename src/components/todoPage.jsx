import Sidebar from "./todos/sidebar";
import TodoSection from "./todos/todosSection";
import "../css/todos/todos.css";

export default function () {
  return (
    <div class="todosPage">
      <Sidebar />
      <TodoSection />
    </div>
  );
}
