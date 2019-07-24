import React, { Component } from "react";

export default class App extends Component {
  render() {
    const params = window.location.search.split("&");
    const sortedParams = {};
    params.forEach(param => {
      let _param = param;
      if (/^[?]/g.test(_param)) {
        _param = _param.substr(1);
      }
      _param = _param.split("=");
      sortedParams[_param[0]] = _param[1];
    });
    return (
      <div>
        {Object.keys(sortedParams).map(item => (
          <li>
            {" "}
            {item} : {sortedParams[item]}{" "}
          </li>
        ))}
      </div>
    );
  }
}
