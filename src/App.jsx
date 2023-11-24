import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { data } from "./data/carouselData"

const Slider = () => {
  const slideRef = useRef(null);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <div className="container">
      <div className="loadbar" style={{ width: "0%" }}></div>
      <div id="slide" ref={slideRef}>
        {data?.map(({ id, imgUrl, name, desc }) => (
          <div
            key={id}
            className="item"
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <div className="content">
              <div className="name">{name}</div>
              <div className="des">{desc}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
