import React, { useContext } from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

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
                <Link to="/login">
                  {user ? (
                    <Button onClick={handleLogout} className="log_btn">
                      Log Out
                    </Button>
                  ) : (
                    <Button className="log_btn">Log in</Button>
                  )}
                </Link>
                <div className="">
                  {user ? (
                    <img
                      className="user"
                      src="../../../../public/images/user.jpg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="user"
                      src="../../../../public/images/noyUser.png"
                      alt=""
                    />
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </section>
  );
};

export default Header;
