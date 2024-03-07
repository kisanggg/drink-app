import React, { useEffect, useState } from "react";
import './ingredient.css';
const Ingredients = () => {
  const [drinkIds] = useState([
    '11007','15346','17105','178320','178318','11728','12790','17224','16333','15567',
    '13086','15266','14364','17174','11243','14730','14956','11002','15330','178364','16942'
  ]);
  const [ingredients, setIngredients] = useState({});
  
  useEffect(() => {
    Promise.all(drinkIds.map(id =>
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
    ))
    .then(responses => {
        const data = responses.reduce((acc, response, index) => {
            const drinkId = drinkIds[index];
            if (response.drinks) {
                acc[drinkId] = response.drinks[0];
            }
            return acc;
        }, {});
        setIngredients(data);
    })
    .catch(error => {
        console.error("Error", error);
    });
}, [drinkIds]);
  return (
    <div style={{backgroundColor:"#494949"}}>
      <h1 style={{color:"#b6b6b6"}}>Cocktail Recipe</h1>
      <div className="main-wrapper">
        {Object.keys(ingredients).map(id => (
          <div style={{display:"flex",justifyContent: "space-around"}}>
          <img src={ingredients[id].strDrinkThumb} alt="err" ></img>
          <div className="info-wrapper">
          <ul key={id}>
            <strong>{ingredients[id].strDrink}</strong>
          </ul>
          <p className="category">Category: {ingredients[id].strCategory}</p>
          <h6>Instructions:</h6>
          <p className="instructions">{ingredients[id].strInstructions}</p>
          <h6>Ingredients:</h6>
          <ul>
          <li style={{marginLeft:"30px"}}>
              {ingredients[id].strIngredient1}:{ingredients[id].strMeasure1}
            </li>
            <li style={{marginLeft:"30px"}}>
              {ingredients[id].strIngredient2}:{ingredients[id].strMeasure2}
            </li>
            <li style={{marginLeft:"30px"}}>
              {ingredients[id].strIngredient3}:{ingredients[id].strMeasure3}
            </li>
            </ul>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Ingredients;
