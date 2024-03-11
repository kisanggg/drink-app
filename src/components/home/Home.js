import React from "react";
import "./home.css";
import { Clock, Envelope, GeoAltFill } from "react-bootstrap-icons";
const Home = () => {
  return (
    <div className="body">
      <div className="main">
        <img
          src="https://www.foodrepublic.com/img/gallery/18-unusual-craft-cocktail-ingredients-you-should-try-at-least-once/l-intro-1689108572.jpg"
          alt="err"
          style={{
            width: "94vw",
            height: "100vh",
          }}
        ></img>
        <h1
          style={{
            position: "absolute",
            color: "#bd7a11",
            marginLeft: "450px",
            fontFamily: "Times New Roman",
          }}
        >
          COCKTAIL PARTY
        </h1>
      </div>
      <div style={{ width: "450px",textAlign:"center",marginLeft:"400px",marginTop:"40px" }}>
        <h2
          style={{ marginLeft: "1px", color: "white", textAlign: "center" }}
        >
          About Us
        </h2>
        <p>
          Every cocktail typically starts with a base spirit, which forms the
          primary alcoholic component of the drink. Common base spirits include
          vodka, rum, gin, tequila, whiskey, and brandy.Farming practices for
          cocktail ingredients can vary significantly depending on the specific
          ingredient and its agricultural requirements.The process of cocktail
          making, also known as mixology, involves several key steps to craft a
          well-balanced and flavorful drink..Farming practices for
          cocktail ingredients can vary significantly depending on the specific
          ingredient and its agricultural requirements.The process of cocktail
          making, also known as mixology, involves several key steps to craft a
          well-balanced and flavorful drink.
        </p>
      </div>
      <div style={{backgroundColor:"rgb(33, 32, 32)",marginTop:"40px"}}>
        <img src="https://media.timeout.com/images/103780539/750/422/image.jpg" alt="err" width={600} height={400} style={{position:"absolute"}}></img>
        <img src="https://www.shutterstock.com/image-photo/expert-barman-making-cocktail-night-600nw-439422121.jpg" alt="e" style={{position:"absolute",marginLeft:"630px",marginTop:"30px"}}></img>
      </div>
      <div style={{height:"160px",backgroundColor:"rgb(189, 122, 17)",marginTop:"480px",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        <div style={{marginLeft:"0px"}}>
          <GeoAltFill size={27} style={{marginLeft:"70px",marginTop:"40px"}}/>
          <p style={{fontSize:"17px",color:"black",textAlign:"left",marginLeft:"18px"}}>Kathmandu, Nepal</p>
        </div>
        <div >
          <Clock size={27} style={{marginTop:"45px"}}/>
          <p style={{color:"black"}}>Mon-Fri : 10AM - 12PM</p>
          <p style={{color:"black"}}>Sat-Sun : 10AM - 4AM</p>
        </div>
        <div>
          <Envelope size={27} style={{marginTop:"45px",marginLeft:"10px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
