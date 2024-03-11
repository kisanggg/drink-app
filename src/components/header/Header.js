import React from "react";
import "./header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Drink from "../Drink/Drink";
import Categories from "../categories/Categories";
import {Person} from "react-bootstrap-icons";
// import DrinkDetails from "../Drink/DrinkDetails";
// import Ingredients from "../Drink/Ingredients";
const Header = () => {
  return (
    <>
      <div className="main-container">
        <Navbar expand="lg" style={{backgroundColor:"black"}}>
          <Container>
            <Navbar.Brand as={Link} to="/home" style={{ fontSize: "22px" ,color:"white",fontFamily:"cursive"}}><i>
              Cocktail-Party
              </i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ fontSize: "20px", color:"white" }}>
                <Nav.Link as={Link} to="/categories" style={{color:"white"}}>
                  Categories
                </Nav.Link>
                <Nav.Link as={Link} to="/drinks" className="drinks" style={{color:"white"}}>
                  Drinks
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/ingredients" style={{color:"white"}}>
                 Ingredients
                </Nav.Link> */}
              </Nav>
             
              <Person size={30} style={{marginLeft:"20px",color:"white"}}/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/drinks" element={<Drink />}></Route>
          {/* <Route path={'/drinks/:idDrink'} element={<DrinkDetails/>}></Route> */}
          {/* <Route path="/ingredients" element={<Ingredients/>}></Route> */}
          <Route path="/categories" element={<Categories />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Header;
