import { switchTheme } from "../utils";
import { Link } from "@solidjs/router";
import { RiSystemSettingsLine } from "solid-icons/ri";
import {
  BiRegularNotepad,
  BiSolidToggleLeft,
  BiSolidToggleRight,
  BiRegularUser,
} from "solid-icons/bi";


import { SiTarget } from "solid-icons/si";

import { timer } from "../store";
import "../css/navbar.css";

function BrandInfo() {
  return (
    <Link href="/">
      <div class="brand">
        <img src="./assets/logo.png" width="50" height="50" class="brandLogo"/>

        <div class="brandTitle">PetZ Money Pomodoro</div>
      </div>
    </Link>
  );
}

function ThemeToggle() {
  return (
    <>
      {timer.theme == "light" &&
        (
          <BiSolidToggleLeft
            size={25}
            class="themeToggle"
            onclick={() => switchTheme("dark")}
          />
        )}

      {timer.theme == "dark" &&
        (
          <BiSolidToggleRight
            size={25}
            class="themeToggle"
            onclick={() => switchTheme("light")}
          />
        )}
    </>
  );
}

function NavbarLinks() {
  return (
    <div class="navbarLinks">
      <Link href="/todos">
        <div class="todosBtn">
          <BiRegularNotepad size={21} class="todosIcon" color="#fff"/>
          Todos
        </div>
      </Link>

      {/* user Account -> login/logout stuff*/}
      <BiRegularUser
        size={21}
        class="userIcon"
        onclick={() => alert("WIP! data is stored in localstorage for now")}
      />

      <Link href="/settings">
        <RiSystemSettingsLine size={21} class="settingsBtn" />
      </Link>
    </div>
  );
}

function Btns() {
  return (
    <div class="navBtns">
      <ThemeToggle />
      <NavbarLinks />
    </div>
  );
}

// Navbar
export default () => {
  return (
    <nav class="navbar">
      <BrandInfo />
      <Btns />
    </nav>
  );
};
