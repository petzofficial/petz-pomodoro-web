import "../css/timer.css";
import RadialBar from "./radialBar";

// icons
import { AiOutlinePause } from "solid-icons/ai";
import { VsDebugRestart } from "solid-icons/vs";
import { BsPlayFill } from "solid-icons/bs";
import { getProgressValue, numToText, playSound, utc } from "../utils";
import { timer } from "../store";

import tickSound from "../../assets/audio/tick.mp3";
import timerSound from "../../assets/audio/timerSound.mp3";

// reset todaysProgress on next day
if (!localStorage.date || localStorage.date != utc) {
  localStorage.setItem("date", utc);
  localStorage.setItem("todaysProgress", 0);
}

// update todaysProgress on current day
if (localStorage.date == utc && localStorage.todaysProgress) {
  timer.todaysProgress = parseInt(localStorage.todaysProgress);
}

export let interval, pausedTime, currentClick;
export let totalTime = 25, pomoTime = totalTime * 60;

function update() {
  // when timer is finished
  if (pomoTime === 0) {
    playSound(timerSound);

    timer.timeInText = numToText(0, 0);
    timer.progress = 100;
    timer.playBtn = true;
    timer.todaysProgress = timer.todaysProgress + totalTime;

    clearInterval(interval);

    localStorage.setItem("todaysProgress", timer.todaysProgress);

    document.title = "Time's up!";
    return;
  }

  const min = Math.floor(pomoTime / 60);
  const sec = pomoTime % 60;

  timer.timeInText = numToText(min, sec);
  timer.progress = getProgressValue(totalTime, pomoTime);

  document.title = numToText(min, sec);
  pomoTime--;
}

function run(action) {
  currentClick = action;
  interval = setInterval(update, 1000);

  if (action == "start" || action == "resume") {
    timer.playBtn = false;
  }

  action == "start" ? playSound(tickSound) : (pomoTime = pausedTime);
}

function start() {
  switch (currentClick) {
    // start
    case undefined:
    case "reset":
      run("start");
      break;

    // resume

    default:
      run("resume");
  }
}

function pause() {
  currentClick = "pause";
  pausedTime = pomoTime;

  timer.playBtn = true;
  timer.progress = getProgressValue(totalTime, pausedTime);

  const min = Math.floor(pausedTime / 60);
  const sec = pausedTime % 60;

  timer.timeInText = numToText(min, sec);

  pomoTime = 0;
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);

  document.title = "PetZ Money Pomodoro";
  currentClick = "reset";
  pomoTime = totalTime * 60;

  timer.progress = 0;
  timer.playBtn = true;
  timer.timeInText = `${totalTime} : 00`;
}

function ActionBtns() {
  return (
    <div class="ActionBtns">
      {/* show play btn by default */}

      {timer.playBtn &&
        <BsPlayFill onClick={start} class="playBtn" size={24} />}

      {/* hide playBtn and show pause btn in pauseMode*/}

      {!timer.playBtn &&
        <AiOutlinePause onClick={pause} class="playBtn" size={24} />}

      {/*Reset btn*/}

      <VsDebugRestart
        onClick={reset}
        class="resetBtn"
        size={24}
      />
    </div>
  );
}

export default () => {
  return (
    <main class="timer">
      <RadialBar
        strokeWidth={6}
        percentage={timer.progress}
        innerText={timer.timeInText}
        mainClass="MainCircle"
      />

      <ActionBtns />
    </main>
  );
};
