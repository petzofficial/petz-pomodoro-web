import { BiRegularFolder, BiSolidHeartCircle } from "solid-icons/bi";
import { FaRegularCircleDot } from "solid-icons/fa";
import { IoTodayOutline } from 'solid-icons/io'

import { projects } from "../../store";
import Project from "./project";

// list of all project btns on the sidebar
export default () => {
  return (
    <div class="projectLists">
      <Project name="Today" icon={IoTodayOutline} color="blue" />
      <Project
        name="Important"
        icon={BiSolidHeartCircle}
        color="red"
      />
      <Project name="Low priority" icon={FaRegularCircleDot} color="green" />

      {/* user added projects*/}
      {projects.list.map((item) => <Project name={item} icon={BiRegularFolder} />)}
    </div>
  );
};
