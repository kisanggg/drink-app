import React, { useState,useEffect } from 'react'
import { Card} from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons';
import { Modal } from 'react-bootstrap';
const Ordinary = () => {
    const[ordinary,setOrdinary]=useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemDetails, setSelectedItemDetails] = useState(null);
    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
        .then((response)=> response.json())
        .then((data)=>{
          console.log(data.drinks);
          setOrdinary(data.drinks);
        })
        .catch((error)=>{
          console.log(error.message);
        })
      },[])

      const handleItemClick=(drink)=>{
        setSelectedItem(drink);
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
        .then((response)=>response.json())
        .then((data)=>{
            setSelectedItemDetails(data.drinks[0]);
        })
        .catch((error)=>{
            console.log(error.message);
        })
      }
      const handleCloseModal = () => {
        setSelectedItem(null);
        setSelectedItemDetails(null);
      };
    
  return (
    <div style={{backgroundColor:"rgb(36, 36, 36)"}}>
       <div>
        <h1 style={{textAlign:"center",color:"rgb(201, 200, 197)"}}>Ordinary Drinks</h1>
        <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto"}}>
            {ordinary.map((drink)=>(
                 <Card
                 key={drink.idDrink}
                 style={{
                   width: "16rem",
                   margin: "20px",
                   backgroundColor: "rgb(187 187 187)",
                 }}
                 onClick={() => handleItemClick(drink)}
               >
                 <Card.Img
                   className="image"
                   src={drink.strDrinkThumb}
                   style={{ width: "200px", height: "200px" }}
                   alt={drink.strDrink}
                 />
                 <Card.Title
                   style={{ fontSize: "16px", fontFamily: "Times New Roman" }}
                   className="title"
                 >
                   {drink.strDrink}
                 </Card.Title>
                 <HeartFill
                   size={18}
                   style={{
                     width: "1rem",
                     height: "1rem",
                     marginTop: "10px",
                     position: "absolute",
                     marginLeft: "10px",
                     cursor: "pointer",
                     color: drink.isClicked ? "red" : "black",
                   }}
                //    onClick={() => handleHeartClick(drink.idDrink)}
                 />
               </Card>
            ))}
        </div>
      </div>
      <Modal show={selectedItem !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && selectedItem.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "440px" }}>
          {selectedItemDetails && (
            <>
              <img
                src={selectedItemDetails.strDrinkThumb}
                alt={selectedItemDetails.strDrink}
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <h5>Instructions:</h5>
              <p style={{color:"black",textAlign:"justify"}}>{selectedItemDetails.strInstructions}</p>
              <h5>Ingredients:</h5>

              <ul>
                <li style={{ marginLeft: "30px" }}>
                  {selectedItemDetails.strIngredient1}:
                  {selectedItemDetails.strMeasure1}
                </li>
                <li style={{ marginLeft: "30px" }}>
                  {selectedItemDetails.strIngredient2}:
                  {selectedItemDetails.strMeasure2}
                </li>
                <li style={{ marginLeft: "30px" }}>
                  {selectedItemDetails.strIngredient3}:
                  {selectedItemDetails.strMeasure3}
                </li>
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Ordinary
