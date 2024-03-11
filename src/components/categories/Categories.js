import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const[glasses,setGlasses]=useState([]);
  const[ingredients,setIngredients]=useState([]);
  const[alcoholic,setAlcoholic]=useState([]);
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

  useEffect(()=>{
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((response)=>{
      return response.json(); 
      })
      .then((data)=>{
        console.log(data.drinks);
        setGlasses(data.drinks.slice(0,25));
      })
      .catch((error)=>{
        console.log(error.message);
      });
  },[]);
  useEffect(()=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data.drinks);
      setIngredients(data.drinks.slice(0,20));
    })
    .catch((error)=>{
      console.log(error.message);
    })
  })
  useEffect(()=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data.drinks);
      setAlcoholic(data.drinks);
    })
    .catch((error)=>{
      console.log(error.message);
    })
  })

  return (
    <>
    <div style={{border:"1px solid black",margin:"20px",padding:"10px",borderRadius:"5px",width:"1100px"}}>
      <h3>Categories:</h3>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {categories.map((drink) => (
        <div key={drink.strCategory} >
          <h6 style={{border:"1px solid black",borderRadius:"5px",margin:"5px",width:"150px",height:"30px",textAlign:"center",padding:"1px"}}>{drink.strCategory}</h6>
        </div>
      ))}
    </div>
    </div>
    <div style={{border:"1px solid black",margin:"20px",padding:"10px",borderRadius:"5px",width:"1100px" }}>
      <h3>Glasses:</h3>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {glasses.map((drink)=>(
          <div key={drink.strGlass}>
            <h6 style={{border:"1px solid black",borderRadius:"5px",margin:"5px",width:"200px",height:"40px",textAlign:"center",padding:"5px"}}>{drink.strGlass}</h6>
          </div>
        ))}
      </div>
    </div>
    <div style={{border:"1px solid black",margin:"20px",padding:"10px",borderRadius:"5px",width:"1100px"}}>
        <h3>Ingredients:</h3>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {ingredients.map((drink)=>(
            <div>
             <h6 style={{border:"1px solid black",borderRadius:"5px",margin:"5px",width:"180px",height:"40px",textAlign:"center",padding:"8px"}}>{drink.strIngredient1}</h6>
            </div>
          ))}
        </div>
    </div>
    <div style={{border:"1px solid black",margin:"20px",padding:"10px",borderRadius:"5px",width:"1100px"}}>
        <h3>Type:</h3>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {alcoholic.map((drink)=>(
            <div>
             <h6 style={{border:"1px solid black",borderRadius:"5px",margin:"5px",width:"150px",height:"30px",textAlign:"center",padding:"3px"}}>{drink.strAlcoholic}</h6>
            </div>
          ))}
        </div>
    </div>
    </>
  );
};

export default Categories;
