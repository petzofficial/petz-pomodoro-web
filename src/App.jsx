import "./css/style.css";
import "./css/themes.css";
import "./css/animations.css";

import { Route, Routes } from "@solidjs/router";

// components
import Navbar from "./components/navbar";
import Timer from "./components/timer";
import Settings from "./components/settings";
import TodoPage from "./components/todoPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
