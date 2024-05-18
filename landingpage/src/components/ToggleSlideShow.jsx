/* eslint-disable no-unused-vars */
import imagesList from "../utils/Collections";
import eventList from "../utils/Events";
import Collectible from "./Collectible";

const ToggleSlideShow = () => {
  let eventData = true;

  return (
    <div>
      if(eventData) {<Collectible data={eventList} />}
      else <Collectible data={imagesList} />
    </div>
  );
};

export default ToggleSlideShow;
