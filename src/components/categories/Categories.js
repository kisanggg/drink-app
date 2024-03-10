import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Gallery = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.drinks);
        setCategories(data.drinks);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((drink) => (
        <div key={drink.idDrink}>
          <Card style={{width:"30rem"}}>
            <Card.Img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <Card.Title>{drink.strDrink}</Card.Title>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
