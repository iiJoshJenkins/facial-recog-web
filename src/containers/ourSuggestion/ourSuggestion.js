import React from "react";
import * as MarsBar from "../../assets/images/Mars_Bar.png";
import * as Grenola from "../../assets/images/grenola.png";
import * as Wafer from "../../assets/images/wafer.png";
import * as Cookies from "../../assets/images/cookies.png";
const titles = {
  great: ["Great! I'm glad to hear it!", "Can we suggest...", MarsBar],
  ok: ["Hmm... this might pick you up", "We recommend...", Grenola],
  meh: ["Oh no! I hope we can help.", "Can we recommend...", Wafer],
  complicated: [
    "Hmm... we recommend thinking things over with one of these...",
    Cookies
  ]
};
const OurSuggestion = ({ feeling }) => (
  <div>
    <div className="container">
      <h1 className="title suggestion">{titles[feeling][0]}</h1>
    </div>
    {titles[feeling][1] && (
      <div className="container">
        <h1 className="title suggestion-subtitle">{titles[feeling][1]}</h1>
      </div>
    )}
    <div className="container">
      <img src={titles[feeling][2]} alt="recommneded product" />
    </div>
  </div>
);

export default OurSuggestion;
