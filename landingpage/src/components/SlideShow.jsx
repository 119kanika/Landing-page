/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const SlideShow = ({ data }) => {
  if (!Array.isArray(data)) {
    throw new Error("data must be an array");
  }

  const [index, setIndex] = useState(0);
  const timeOutRef = useRef(null);
  const delay = 3000;

  function resetTimeout() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeOutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, data.length]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {data.map((image) => (
          <div key={image.id} className="slide">
            <div className="details">
              <h2>Lunar Palace:</h2>
              <p>(ft. Kanya west)</p>
            </div>
            <img className="Coll-images" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
