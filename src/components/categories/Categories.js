import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); 
      })
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
      <h1 style={{textAlign:"center"}}>Categories</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {categories.map((drink) => (
        <div key={drink.strCategory} >
          <h6 style={{border:"1px solid black",borderRadius:"5px",margin:"5px",width:"150px",height:"30px",textAlign:"center",padding:"1px"}}>{drink.strCategory}</h6>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Categories;
