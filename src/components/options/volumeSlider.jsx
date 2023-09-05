import "../../css/settings.css";
import { timer } from "../../store";

function handleRange(e) {
  timer.volume = e.target.value;
  localStorage.setItem("volume", timer.volume);
}

function AudioSlider() {
  return (
    <div id="sliderContainer">
      <input
        type="range"
        min="0"
        max="100"
        id="slider"
        value={timer.volume}
        onInput={handleRange}
      />
      <div class="volumePercentage">
        {timer.volume}
      </div>
    </div>
  );
}

export default () => {
  return (
    <div id="volumeContainer">
      <h3>Adjust volume</h3>
      <AudioSlider />
    </div>
  );
};
