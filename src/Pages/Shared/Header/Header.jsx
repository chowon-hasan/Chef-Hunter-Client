import React, { useContext } from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();

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
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : "defaultt"}
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className={
                    location.pathname === "/blog" ? "active" : "defaultt"
                  }
                >
                  Blog
                </Link>

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
                      title={user ? user.displayName : "Please register"}
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
