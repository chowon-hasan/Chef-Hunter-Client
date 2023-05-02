import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="foot_bg py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="">
              <h3 className="Logo_text">Italian's Chefs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel in
                ab quasi perspiciatis ratione debitis quis porro laudantium enim
                nemo a fuga, ut eius fugit optio non, similique sit temporibus?
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="">
              <ul>
                <li>Contact Us</li>
                <li>Chef's List</li>
                <li>Chefs Origin</li>
                <li>Recipe's List</li>
                <li>Tip's From Chef's</li>
                <li>Feeddback</li>
              </ul>
            </div>
          </Col>
          <Col lg={5}>
            <div className="">
              <p>Email: Example@gmail.com</p>
              <p>Phone: +99 09 876 55</p>
              <hr />
              <p>Social links</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
