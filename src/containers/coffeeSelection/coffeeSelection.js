import React from "react";

const CoffeeSelection = ({ drinksList, changeState }) => (
  <div>
    <div className={"container"}>
      <h1 className={"title drinks"}>What drink are you going for today?</h1>
    </div>
    <div className={"container"}>
      <ul className={"drinks-list"}>
        {drinksList.map((item, index) => (
          <li key={index} className={"drinks-list-item"}>
            <img
              src={item.src}
              alt={item.name}
              onClick={item =>
                changeState({
                  selectedDrink: item.target.dataset.drink
                })
              }
              data-drink={item.name}
            />
            <figcaption> {item.name} </figcaption>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CoffeeSelection;
