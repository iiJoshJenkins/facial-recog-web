import React from "react";

const Home = ({ buttonClass, changeState }) => (
  <div>
    <div className={"container"}>
      <h1 className={"title"}>Hello Gorgeous!</h1>
    </div>
    <div className={"container"}>
      <button
        className={buttonClass}
        onClick={() => changeState({ start: true })}
      >
        CLICK HERE TO BEGIN
      </button>
    </div>
  </div>
);

export default Home;
