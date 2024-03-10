import React from "react";
import "./home.css";
import { Search } from "react-bootstrap-icons";
const Home = () => {
  return (
    <div className="body">
      <div className="main">
        <img
          src="https://www.okayplayer.com/media-library/photo-by-jakub-dziubak-for-unsplash.jpg?id=46471783&width=1245&height=700&quality=90&coordinates=0%2C0%2C0%2C158"
          alt="err"
          style={{
            width: "110vw",
            height: "100vh",
          }}
        ></img>
        <input
          type="text"
          placeholder="Search"
          style={{
            width: "420px",
            height: "45px",
            position: "absolute",
            margin: "20px",
            marginLeft: "400px",
            border: "1px solid black",
            borderRadius: "8px",
          }}
        ></input>
        <button
          style={{
            position: "absolute",
            marginLeft: "823px",
            height: "45px",
            width: "80px",
            border: "1px solid black",
            borderRadius: "8px",
          }}
        >
          <Search size={25} />
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <img
          src="https://www.nicepng.com/png/detail/122-1221053_whiskey-glass-png-rum-in-glass-png.png"
          alt="err"
        ></img>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <div style={{ width: "280px" }}>
            <h4 style={{ marginLeft: "1px" }}>About Us</h4>
            <h6 style={{ marginLeft: "1px" }}>Best Ingredients</h6>
            <p>
              Every cocktail typically starts with a base spirit, which forms
              the primary alcoholic component of the drink. Common base spirits
              include vodka, rum, gin, tequila, whiskey, and brandy.
            </p>
            <h6 style={{ marginLeft: "1px" }}>Farming Practices</h6>
            <p>
              Farming practices for cocktail ingredients can vary significantly
              depending on the specific ingredient and its agricultural
              requirements.
            </p>
          </div>
          <div
            style={{
              width: "280px",
              textAlign: "justify",
              marginLeft: "40px",
              marginTop: "36px",
            }}
          >
            <h6 style={{ marginLeft: "1px" }}>Our Process</h6>
            <p>
              The process of cocktail making, also known as mixology, involves
              several key steps to craft a well-balanced and flavorful drink.
            </p>
            <h6 style={{ marginTop: "48px", marginLeft: "1px" }}>
              Story Behind
            </h6>
            <p>
              The story behind cocktail making is a rich and diverse narrative
              that spans centuries and continents.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
