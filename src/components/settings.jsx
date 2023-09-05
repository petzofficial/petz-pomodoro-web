import VolumeSlider from "./options/volumeSlider";
import GoalCounter from "./options/goals";

// settings component
export default () => {
  return (
    <>
      <h1>Settings</h1>

      <main class="settings">
        <div class="miscWidgets">
          <VolumeSlider />
          <GoalCounter />
        </div>
      </main>
    </>
  );
};
