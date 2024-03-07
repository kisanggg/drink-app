import React from "react";
import "./header.css";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Drink from "../Drink/Drink";
import Gallery from "../gallery/Gallery";
import { Search } from "react-bootstrap-icons";
import Ingredients from "../Drink/Ingredients";
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
                <Nav.Link as={Link} to="/drinks" style={{color:"white"}}>
                  Drinks
                </Nav.Link><Nav.Link as={Link} to="/ingredients" style={{color:"white"}}>
                 Ingredients
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery" style={{color:"white"}}>
                  Gallery
                </Nav.Link>
              </Nav>
              <Form>
                <input
                  type="text"
                  placeholder="Search"
                  style={{ width: "200px" }}
                ></input>
                <button
                  style={{ borderRadius: "2px" }}
                  type="submit"
                  id="searchSubmit"
                >
                  <Search />
                </button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/drinks" element={<Drink />}></Route>
          <Route path="/ingredients" element={<Ingredients/>}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Header;
