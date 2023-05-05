import React from "react";
import "./banner.css";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner_bg">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="banner_content">
              <h1 className="text-white banner_title">
                Italian's Chef's House
              </h1>
              <p className="text-white">
                Interested to know some of the most famous Italian chefs? Stick
                around to meet some of the best chefs from Italy.
              </p>
              <p className="text-white">
                As Italy is known for its sumptuous dishes, so are the famous
                chefs behind the grandeur of Italian cuisine. By producing the
                best of the best, chefs from Italy are some of the most
                highly-regarded internationally. On this post, you will be
                directed toward some of the most famous Italian people – the
                best Italian chefs that have carved their own niches in the
                global scene.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="">
              <img className="img-fluid" src="/images/chef-lotti.gif" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
