import eventImg2 from "../../public/images/ImgEvent3.png";
import eventImg1 from "../../public/images/ImgEvent4.png";
import eventImg3 from "../../public/images/ImgEvent5.png";
import scanner from "../../public/images/scanner.png";

const Explore = () => {
  return (
    <div>
      <div className="explore">
        <h2>Explore Your First Event</h2>
        <div className="explore-event">
          <h1>Event Name</h1>
        </div>
        <div className="event-details">
          <p>
            <span className="material-symbols-outlined ">location_on</span>
            Venue
          </p>
          <p>
            <span className="material-symbols-outlined">schedule</span>04/3/2024
          </p>
          <p>
            <span className="material-symbols-outlined">alternate_email</span>
            19:00
          </p>
        </div>
        <p className="event-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          dolore quia? Dolores quas placeat, nihil maxime inventore, magnam
          asperiores accusamus saepe doloremque.
        </p>

        <h3>Artist Lineup</h3>
        <div className="cards">
          <img src={eventImg1} alt="" />
          <img src={eventImg2} alt="" />
          <img src={eventImg3} alt="" />
        </div>
        <div className="more">
          <img src={scanner} alt="" />
          <button>Join Waitlist</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
