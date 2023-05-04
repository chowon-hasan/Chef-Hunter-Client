import React from "react";
import "./Blogs.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="my-5">
      <h1 className="text-center blog_titel">Our News</h1>
      <p className="text-center">
        Phasellus enim libero, blandit vel sapien vitae, condimentum
      </p>
      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <div className="">
              <img className="img-fluid" src="/images/blog-1.jpg" alt="" />
            </div>
          </Col>

          <Col className="d-flex align-items-center" lg={6}>
            <div className="blog_parent">
              <div className="blog_content">
                <h3>New Appetizers</h3>
                <span>10 JANUARY</span>
                <p>
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <Button className="blog_btn">Read More</Button>
              </div>
            </div>
          </Col>

          <Col className="d-flex align-items-center my-5" lg={6}>
            <div className="blog_parent">
              <div className="blog_content text-end">
                <h3>New Appetizers</h3>
                <span>10 JANUARY</span>
                <p>
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <Button className="blog_btn">Read More</Button>
              </div>
            </div>
          </Col>

          <Col className="my-5" lg={6}>
            <div className="">
              <img className="img-fluid" src="/images/blog-2.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
