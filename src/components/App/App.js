import React, { Component } from "react";
import "./App.css";
import * as Latte from "../../assets/images/latte.png";
import * as Cappuccino from "../../assets/images/cappuccino.png";
import * as Mocha from "../../assets/images/mocha.png";
import * as Americano from "../../assets/images/americano.png";
import * as Espresso from "../../assets/images/espresso.png";
import * as FlatWhite from "../../assets/images/flatwhite.png";

import Home from "../../containers/home/home";
import CoffeeSelection from "../../containers/coffeeSelection/coffeeSelection";
import EmotionSelection from "../../containers/emotionSelection/emotionSelection";
import OurSuggestion from "../../containers/ourSuggestion/ourSuggestion";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      selectedDrink: null,
      selectedFeeling: null
    };

    this.drinksList = [
      {
        name: "Latte",
        src: Latte
      },
      {
        name: "Cappuccino",
        src: Cappuccino
      },
      {
        name: "Mocha",
        src: Mocha
      },
      {
        name: "Americano",
        src: Americano
      },
      {
        name: "Espresso",
        src: Espresso
      },
      {
        name: "FlatWhite",
        src: FlatWhite
      }
    ];
  }
  changeState(state) {
    this.setState(state);
  }
  render() {
    document.body.style.backgroundColor = "#fff";
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
    const buttonClass = `clickHere ` + sortedParams.gender;
    return (
      <div>
        {!this.state.start && (
          <Home
            buttonClass={buttonClass}
            changeState={this.changeState.bind(this)}
          />
        )}
        {this.state.start && !this.state.selectedDrink && (
          <CoffeeSelection
            drinksList={this.drinksList}
            changeState={this.changeState.bind(this)}
          />
        )}
        {this.state.selectedDrink && !this.state.selectedFeeling && (
          <EmotionSelection changeState={this.changeState.bind(this)} />
        )}
        {this.state.selectedFeeling && (
          <OurSuggestion feeling={this.state.selectedFeeling} />
        )}
      </div>
    );
  }
}
