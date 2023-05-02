import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="Head_bg">
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="/" className="Logo">
              Italian's Chefs
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                <Link className="nav_link" to="/">
                  Home
                </Link>
                <Link className="nav_link">Blog</Link>
                <Link className="nav_link">About</Link>
                <Link>
                  <Button className="log_btn">Log in</Button>
                </Link>
                <img src="" alt="" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </section>
  );
};

export default Header;
