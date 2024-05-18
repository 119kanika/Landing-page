import elipse1 from "../../public/images/Ellipse1.png";
import elipse2 from "../../public/images/Ellipse2.png";
import elipse3 from "../../public/images/Ellipse3.png";
import elipse4 from "../../public/images/Ellipse4.png";
import elipse5 from "../../public/images/Ellipse5.png";
import img5 from "../../public/images/ImageColl5.png";

const Explore = () => {
  return (
    <div>
      <div className="explore">
        <h2>Explore Your First Collectible</h2>
        <div className="heading-explore">
          <h1>Meta Lives</h1>
        </div>
        <div className="description">
          <h3>Live in Astrix</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
            perspiciatis voluptates? Quaerat, sit necessitatibus?
          </p>
        </div>
        <div className="people">
          <div className="people-icons">
            <img src={elipse1} alt="" />
            <img src={elipse2} alt="" />
            <img src={elipse3} alt="" />
            <img src={elipse4} alt="" />
            <img src={elipse5} alt="" />
          </div>
          <p>22k people interested</p>
        </div>

        <h3>Collectibles</h3>
        <div className="cards">
          <div className="child-cards">
            <div className="card-details">
              <p className="year">2024</p>
              <p className="artist">By Pablo</p>
            </div>
            <p className="title">Collectible name</p>
            <img src={img5} alt="" />
          </div>

          <div className="child-cards">
            <div className="card-details">
              <p className="year">2024</p>
              <p className="artist">By Pablo</p>
            </div>
            <p className="title">Collectible name</p>
            <img src={img5} alt="" />
          </div>

          <div className="child-cards">
            <div className="card-details">
              <p className="year">2024</p>
              <p className="artist">By Pablo</p>
            </div>
            <p className="title">Collectible name</p>
            <img src={img5} alt="" />
          </div>
        </div>
        <button>Join Waitlist</button>
      </div>
    </div>
  );
};

export default Explore;
