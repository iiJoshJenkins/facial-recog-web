import React from "react";
import * as Great from "../../assets/images/happy.png";
import * as Ok from "../../assets/images/ok.png";
import * as Meh from "../../assets/images/meh.png";
import * as Complicated from "../../assets/images/complicated.png";

const EmotionSelection = ({ changeState }) => (
  <div>
    <div className="container">
      <h1 className="title emotions"> Great Choice! </h1>
    </div>
    <div className="container">
      <h1 className="title emotions-subtitle"> How are you feeling today? </h1>
    </div>
    <div className="container">
      <ul className="emotions-list">
        <li>
          <img
            src={Great}
            alt={"Happy Emoticon"}
            onClick={item =>
              changeState({
                selectedFeeling: item.target.dataset.feeling
              })
            }
            data-feeling={"great"}
          />
        </li>
        <li>
          <img
            src={Ok}
            alt={"Ok Emoticon"}
            onClick={item =>
              changeState({
                selectedFeeling: item.target.dataset.feeling
              })
            }
            data-feeling={"ok"}
          />
        </li>
        <li>
          <img
            src={Meh}
            alt={"Meh Emoticon"}
            onClick={item =>
              changeState({
                selectedFeeling: item.target.dataset.feeling
              })
            }
            data-feeling={"meh"}
          />
        </li>
        <li>
          <img
            src={Complicated}
            alt={"Happy Emoticon"}
            onClick={item =>
              changeState({
                selectedFeeling: item.target.dataset.feeling
              })
            }
            data-feeling={"complicated"}
          />
        </li>
      </ul>
    </div>
  </div>
);
export default EmotionSelection;
