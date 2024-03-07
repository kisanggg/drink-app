import React, { useEffect, useState } from "react";
import './drink.css'
// import DrinkCards from "../cards/DrinkCards";

const Recipe = () => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data.drinks); 
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="main-wrapperr">
      <div className="drink-wrapper">
        <h1 style={{ fontFamily: "SauberScript" }}>Drinks</h1>
        <p style={{ width: "800px" }}>
          The Cocktail Party app contains hundreds of kitchen-tested,
          guaranteed-delicious cocktail recipes sourced from historic bar
          manuals and up-and-coming mixologists, along with perfected recipes
          for classic cocktails.
        </p>
      </div>
      <div className="wrapper">
        {category.map((drinks) => (
          <div key={drinks.idDrink}>
            <img className="image" src={drinks.strDrinkThumb} style={{width:"200px",height:"200px"}} alt={drinks.strDrink} />
            <h6 className="title">{drinks.strDrink}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
