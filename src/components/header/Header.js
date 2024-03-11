import React from "react";
import "./header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Drink from "../Drink/Drink";
import Contact from "./Contact";
import {Person} from "react-bootstrap-icons";
const Header = () => {
  return (
    <>
      <div className="main-container">
        <Navbar expand="lg" style={{backgroundColor:"black"}}>
          <Container>
            <Navbar.Brand  style={{ fontSize: "30px" ,color:"#bd7a11",fontFamily:"fantasy"}}>
              Cocktail-Party
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ fontSize: "20px", color:"white",fontFamily:"Times New Roman" }}>
                <Nav.Link as={Link} to="/home" style={{color:"white"}}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/drinks" className="drinks" style={{color:"white"}}>
                  Drinks
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" style={{color:"white"}}>
                 Contact Us
                </Nav.Link>
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
          <Route path="/contact" element={<Contact/>}></Route>
          {/* <Route path="/categories" element={<Categories />}></Route> */}
        </Routes>
      </div>
    </>
  );
};

export default Header;
