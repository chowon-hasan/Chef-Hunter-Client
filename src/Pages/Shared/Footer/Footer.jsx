import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="foot_bg py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="">
              <h3 className="Logo_text">Italian's Chefs</h3>
              <p>
                As Italy is known for its sumptuous dishes, so are the famous
                chefs behind the grandeur of Italian cuisine. By producing the
                best of the bests.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="">
              <ul className="links_ul">
                <li>Contact Us</li>
                <li>Chef's List</li>
                <li>Chefs Origin</li>
                <li>Recipe's List</li>
                <li>Tip's From Chef's</li>
                <li>Feeddback</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div className="social_body">
              <p>Email: Example@gmail.com</p>
              <p>Phone: +99 09 876 55</p>
              <hr />
              <p>Social links</p>
              <div className="">
                <FaFacebook />
                <FaTwitter className="icons" />
                <FaInstagram />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-5">
        <p>All rights reserved ©2023 italin's Chefs</p>
      </div>
    </section>
  );
};

export default Footer;
