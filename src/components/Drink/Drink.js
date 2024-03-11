import React, { useEffect, useState } from "react";
import "./drink.css";
import { Card, Modal } from "react-bootstrap";
import { HeartFill, Search } from "react-bootstrap-icons";

const Recipe = () => {
  const [category, setCategories] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(
          data.drinks.map((drink) => ({ ...drink, isClicked: true }))
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleHeartClick = (drinkId) => {
    setCategories((prevCategories) => {
      return prevCategories.map((drink) => {
        if (drink.idDrink === drinkId) {
          return { ...drink, isClicked: !drink.isClicked };
        }
        return drink;
      });
    });
  };
  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const handleZoomedImageClose = () => {
    setZoomedImage(null);
  };
  const handleItemClick = (drink) => {
    setSelectedItem(drink);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedItemDetails(data.drinks[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedItemDetails(null);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    const results = category.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Search results:", results);
    setSearchResults(results);
  };

  return (
    <>
      <div className="main-wrapperr">
        <div className="drink-wrapper">
          <h1
            style={{
              textAlign: "center",
              fontFamily: "initial",
              color: "rgb(201 200 197)",
            }}
          >
            DRINKS
          </h1>
          <div className="images">
            <img
              src="https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg"
                )
              }
            ></img>
            <img
              src="https://www.liquor.com/thmb/FtK86O9W4_pRq1Y3gc1iJerTGP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vodka-martini-1500x1500-hero-080af5bb8ff04851a9c0ecf77a88a818.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://www.liquor.com/thmb/FtK86O9W4_pRq1Y3gc1iJerTGP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vodka-martini-1500x1500-hero-080af5bb8ff04851a9c0ecf77a88a818.jpg"
                )
              }
            ></img>
            <img
              src="https://www.acouplecooks.com/wp-content/uploads/2021/12/Vodka-Sunrise-001.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://www.acouplecooks.com/wp-content/uploads/2021/12/Vodka-Sunrise-001.jpg"
                )
              }
            ></img>
            <img
              src="https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Daiquiri_Summer_Cocktail_8a2a0474-bf6e-40db-80a5-e6e6d5a5a7e8_large.jpg?v=1591992228"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Daiquiri_Summer_Cocktail_8a2a0474-bf6e-40db-80a5-e6e6d5a5a7e8_large.jpg?v=1591992228"
                )
              }
            ></img>
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2019/02/Passionfruit-pornstar-martini-b9d5b1a.jpg?quality=90&resize=556,505"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://images.immediate.co.uk/production/volatile/sites/30/2019/02/Passionfruit-pornstar-martini-b9d5b1a.jpg?quality=90&resize=556,505"
                )
              }
            ></img>
            <img
              src="https://www.allrecipes.com/thmb/DQIEfVzC7KndUnnHJbmB44a0u3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221320-old-fashioned-cocktail-ddmfs-3X4-13181414-bf1365252476463b9650096c28b5acfd.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://www.allrecipes.com/thmb/DQIEfVzC7KndUnnHJbmB44a0u3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221320-old-fashioned-cocktail-ddmfs-3X4-13181414-bf1365252476463b9650096c28b5acfd.jpg"
                )
              }
            ></img>
            <img
              src="https://st4.depositphotos.com/3255607/26767/i/450/depositphotos_267677046-stock-photo-tropical-beach-alcohol-blue-drink.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://st4.depositphotos.com/3255607/26767/i/450/depositphotos_267677046-stock-photo-tropical-beach-alcohol-blue-drink.jpg"
                )
              }
            ></img>
            <img
              src="https://zestfulkitchen.com/wp-content/uploads/2021/06/vodka-gimlet-2.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://zestfulkitchen.com/wp-content/uploads/2021/06/vodka-gimlet-2.jpg"
                )
              }
            ></img>
            <img
              src="https://i.pinimg.com/736x/7f/0a/5c/7f0a5c3b306f53c83616e8e28412e28d.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://i.pinimg.com/736x/7f/0a/5c/7f0a5c3b306f53c83616e8e28412e28d.jpg"
                )
              }
            ></img>
            <img
              src="https://passthesushi.com/wp-content/uploads/2014/08/Frozen-Rum-Runner-Cocktails-Kita-Roberts-PassTheSushi-1.jpg"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://passthesushi.com/wp-content/uploads/2014/08/Frozen-Rum-Runner-Cocktails-Kita-Roberts-PassTheSushi-1.jpg"
                )
              }
            ></img>
            <img
              src="https://images.absolutdrinks.com/ingredient-images/Raw/Absolut/bc00554d-bf01-4446-a4c0-86bb0dccb592.jpg?imwidth=500"
              alt="err"
              style={{ width: "200px", height: "200px" }}
              onClick={() =>
                handleImageClick(
                  "https://images.absolutdrinks.com/ingredient-images/Raw/Absolut/bc00554d-bf01-4446-a4c0-86bb0dccb592.jpg?imwidth=500"
                )
              }
            ></img>
          </div>
          {zoomedImage && (
            <div className="zoomed-image-container" style={{}}>
              <button
                className="close-button"
                onClick={handleZoomedImageClose}
                style={{ marginTop: "5px", marginLeft: "460px", width: "40px" }}
              >
                X
              </button>
              <div
                className="zoomed-image-overlay"
                onClick={handleZoomedImageClose}
              ></div>
              <img
                src={zoomedImage}
                alt="zoomed"
                className="zoomed-image"
                style={{ marginTop: "1px", width: "500px", height: "500px" }}
              />
            </div>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <h3
            style={{
              textAlign: "left",
              fontFamily: "initial",
              margin: "20px",
              marginTop: "40px",
              marginLeft: "40px",
              color: "rgb(201 200 197)",
            }}
          >
            MOST POPULAR COCKTAILS
          </h3>
          <div>
            <input
              id="searchInput"
              type="text"
              placeholder="Search"
              style={{
                width: "250px",
                height: "35px",
                margin: "20px",
                marginTop: "40px",
                marginLeft: "450px",
                marginRight: "3px",
                border: "1px solid black",
                borderRadius: "8px",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              style={{
                height: "35px",
                width: "60px",
                border: "1px solid black",
                borderRadius: "8px",
                margin: "20px",
                marginTop: "40px",
                marginLeft: "0px",
              }}
            >
              <Search size={25} />
            </button>
          </div>
        </div>
        <div className="wrapper">
          {searchTerm
            ? searchResults.map((drink) => (
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
                    onClick={() => handleHeartClick(drink.idDrink)}
                  />
                </Card>
              ))
            : category.map((drink) => (
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
                    onClick={() => handleHeartClick(drink.idDrink)}
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
              <p>{selectedItemDetails.strInstructions}</p>
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
    </>
  );
};

export default Recipe;
