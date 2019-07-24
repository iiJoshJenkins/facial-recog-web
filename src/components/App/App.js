import React, { Component } from "react";

export default class App extends Component {
  render() {
    document.body.style.backgroundColor = "#000";
    const params = window.location.search.split("&");
    const sortedParams = {
      gender: null,
      age: null
    };
    params.forEach(param => {
      let _param = param;
      if (/^[?]/g.test(_param)) {
        _param = _param.substr(1);
      }
      _param = _param.split("=");
      if (_param[1] === "1") {
        if (/s$/g.test(_param[0])) {
          _param[0] = _param[0].substr(0, _param[0].length - 1);
        }
        if (_param[0] === "male" || _param[0] === "female") {
          sortedParams.gender = _param[0];
        } else {
          sortedParams.age = _param[0];
        }
      }
    });

    return (
      <div>
        <h1 style={{ color: "white" }}>
          You are a {sortedParams.age} {sortedParams.gender}
        </h1>
      </div>
    );
  }
}
