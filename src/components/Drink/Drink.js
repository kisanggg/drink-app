import React, { useEffect, useState } from "react";
import "./drink.css";
import { Card } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

const Recipe = () => {
  const [category, setCategories] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);

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
  return (
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
            onClick={()=>
                handleImageClick("https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg")
            }
          ></img>
          <img
            src="https://www.liquor.com/thmb/FtK86O9W4_pRq1Y3gc1iJerTGP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vodka-martini-1500x1500-hero-080af5bb8ff04851a9c0ecf77a88a818.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://www.liquor.com/thmb/FtK86O9W4_pRq1Y3gc1iJerTGP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vodka-martini-1500x1500-hero-080af5bb8ff04851a9c0ecf77a88a818.jpg")
          }
          ></img>
          <img
            src="https://www.acouplecooks.com/wp-content/uploads/2021/12/Vodka-Sunrise-001.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://www.acouplecooks.com/wp-content/uploads/2021/12/Vodka-Sunrise-001.jpg")
          }
          ></img>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/2/2021/07/GettyImages_933801552-6e4a61e.jpg?resize=768,574"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://images.immediate.co.uk/production/volatile/sites/2/2021/07/GettyImages_933801552-6e4a61e.jpg?resize=768,574")
          }
          ></img>
          <img
            src="https://i.guim.co.uk/img/media/899f4700a61a9ee02a0f1dea371fb046d1907c73/0_3027_8656_5193/master/8656.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6bc62bd9ef53a2379ba46240d9b72b97"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://i.guim.co.uk/img/media/899f4700a61a9ee02a0f1dea371fb046d1907c73/0_3027_8656_5193/master/8656.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6bc62bd9ef53a2379ba46240d9b72b97")
          }
          ></img>
          <img
            src="https://www.deliciousmagazine.co.uk/wp-content/uploads/2023/04/2023D100_COCKTAIL_DOUZEPOINTS__-copy.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://www.deliciousmagazine.co.uk/wp-content/uploads/2023/04/2023D100_COCKTAIL_DOUZEPOINTS__-copy.jpg")
          }
          ></img>
          <img
            src="https://www.liquor.com/thmb/clZPgg_zR19i4AsOTEuhdeWI_Bs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Zombie_Cocktail_2667x2667_primary-4416b8395efd4a3986c209371e628e63.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://www.liquor.com/thmb/clZPgg_zR19i4AsOTEuhdeWI_Bs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Zombie_Cocktail_2667x2667_primary-4416b8395efd4a3986c209371e628e63.jpg")
          }
          ></img>
          <img
            src="https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Daiquiri_Summer_Cocktail_8a2a0474-bf6e-40db-80a5-e6e6d5a5a7e8_large.jpg?v=1591992228"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Daiquiri_Summer_Cocktail_8a2a0474-bf6e-40db-80a5-e6e6d5a5a7e8_large.jpg?v=1591992228")
          }
          ></img>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2019/02/Passionfruit-pornstar-martini-b9d5b1a.jpg?quality=90&resize=556,505"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://images.immediate.co.uk/production/volatile/sites/30/2019/02/Passionfruit-pornstar-martini-b9d5b1a.jpg?quality=90&resize=556,505")
          }
          ></img>
          <img
            src="https://www.allrecipes.com/thmb/DQIEfVzC7KndUnnHJbmB44a0u3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221320-old-fashioned-cocktail-ddmfs-3X4-13181414-bf1365252476463b9650096c28b5acfd.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://www.allrecipes.com/thmb/DQIEfVzC7KndUnnHJbmB44a0u3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221320-old-fashioned-cocktail-ddmfs-3X4-13181414-bf1365252476463b9650096c28b5acfd.jpg")
          }
          ></img>
          <img
            src="https://st4.depositphotos.com/3255607/26767/i/450/depositphotos_267677046-stock-photo-tropical-beach-alcohol-blue-drink.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://st4.depositphotos.com/3255607/26767/i/450/depositphotos_267677046-stock-photo-tropical-beach-alcohol-blue-drink.jpg")
          }
          ></img>
          <img
            src="https://zestfulkitchen.com/wp-content/uploads/2021/06/vodka-gimlet-2.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://zestfulkitchen.com/wp-content/uploads/2021/06/vodka-gimlet-2.jpg")
          }
          ></img>
          <img
            src="https://i.pinimg.com/736x/7f/0a/5c/7f0a5c3b306f53c83616e8e28412e28d.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://i.pinimg.com/736x/7f/0a/5c/7f0a5c3b306f53c83616e8e28412e28d.jpg")
          }
          ></img>
          <img
            src="https://passthesushi.com/wp-content/uploads/2014/08/Frozen-Rum-Runner-Cocktails-Kita-Roberts-PassTheSushi-1.jpg"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://passthesushi.com/wp-content/uploads/2014/08/Frozen-Rum-Runner-Cocktails-Kita-Roberts-PassTheSushi-1.jpg")
          }
          ></img>
          <img
            src="https://images.absolutdrinks.com/ingredient-images/Raw/Absolut/bc00554d-bf01-4446-a4c0-86bb0dccb592.jpg?imwidth=500"
            alt="err"
            style={{ width: "200px", height: "200px" }}
            onClick={()=>
              handleImageClick("https://images.absolutdrinks.com/ingredient-images/Raw/Absolut/bc00554d-bf01-4446-a4c0-86bb0dccb592.jpg?imwidth=500")
          }
          ></img>
        </div>
        {zoomedImage && (
        <div className="zoomed-image-container" style={{display:"solid",border:"1px solid black"}}>
          <div className="zoomed-image-overlay" onClick={handleZoomedImageClose}></div>
          <img src={zoomedImage} alt="zoomed" className="zoomed-image" />
          <button className="close-button" onClick={handleZoomedImageClose} style={{marginTop:"5px"}}>
            Close
          </button>
         
        </div>
      )}
      </div>
      <h4
        style={{
          textAlign: "center",
          fontFamily: "initial",
          margin: "20px",
          marginTop: "40px",
          color: "rgb(201 200 197)",
        }}
      >
        MOST POPULAR
      </h4>
      <div className="wrapper">
        {category.map((drink) => (
          <Card
            key={drink.idDrink}
            style={{
              width: "16rem",
              margin: "20px",
              backgroundColor: "rgb(187 187 187)",
            }}
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
  );
};

export default Recipe;
