import imagesList from "./utils/Collections";
import eventsList from "./utils/Events";
import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import SlideShow from "./components/SlideShow";
import Divider from "./components/Divider";
import Explore from "./components/Explore";
import Header from "./components/Header";

function App() {
  const [group, setGroup] = useState("collections");

  // console.log("imagelist", imagesList);

  const handleEventShow = () => {
    setGroup("events");
  };

  return (
    <div>
      <Header />
      <Background />
      <div className="main-content">
        {group === "events" ? (
          <SlideShow data={eventsList} />
        ) : (
          <SlideShow data={imagesList} />
        )}
        <Divider />
        <Explore />
      </div>
      <div className="toggle-btn">
        <button className="event-btn" onClick={handleEventShow}>
          Events
        </button>
        <button
          className="collection-btn"
          onClick={() => setGroup("collections")}
        >
          Collections
        </button>
      </div>
    </div>
  );
}

export default App;
