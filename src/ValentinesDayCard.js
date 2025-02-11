import React, { useState } from "react";
import paperTexture from "./paper-texture.png";
import heart from "./heart.png";
import "./ValentinesDayCard.css";

const ValentinesDayCard = () => {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleYesClick = () => {
    setYesClicked(true);
    setNoClicked(false);
    window.open("https://www.youtube.com/shorts/3lM4lv6l2c8", "_blank");
  };

  const handleNoClick = () => {
    setNoClicked(true);
    setYesClicked(false);
    window.open("https://www.youtube.com/watch?v=7iqj_l0Da5k", "_blank");
  };

  return (
    <div className="card-container">
      <div className="card">
        <div
          className="paper-texture"
          style={{ backgroundImage: `url(${paperTexture})` }}
        ></div>
        <div className="kawaii-decorations">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="heart heart-1">
            <img src={heart} alt="heart" />
          </div>
          <div className="heart heart-2">
            <img src={heart} alt="heart" />
          </div>
          <div className="heart heart-3">
            <img src={heart} alt="heart" />
          </div>
          <div className="heart heart-4">
            <img src={heart} alt="heart" />
          </div>
          <div className="heart heart-5">
            <img src={heart} alt="heart" />
          </div>
        </div>
        <div className="text" id="TheAsk">
          Will you be my Valentine?
        </div>
        <div className="subtext">
          With the mostest love from your pook, Aryan.
        </div>
        <div className="buttons">
          <button
            className={`button yes ${yesClicked ? "clicked" : ""}`}
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className={`button no ${noClicked ? "clicked" : ""}`}
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValentinesDayCard;
