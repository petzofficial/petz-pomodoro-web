import { timer } from "./store.jsx";

function numToText(min, sec) {
  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;
  return `${min} : ${sec}`;
}

function getProgressValue(ogTime, newTime) {
  newTime = newTime / 60;
  const timeProgres = ((ogTime - newTime) / ogTime) * 100;
  return timeProgres;
}

function playSound(path) {
  let n = document.querySelector("audio");

  n.setAttribute("src", path);
  n.volume = timer.volume / 100;
  n.play();
}

function switchTheme(name) {
  document.body.dataset.theme = name;
  localStorage.setItem("theme", name);
  timer.theme = name; // save to state
}

function minToHrs(num, fixed) {
  let re = new RegExp("^-?\\d+(?:\.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}

export const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

export { getProgressValue, minToHrs, numToText, playSound, switchTheme };
