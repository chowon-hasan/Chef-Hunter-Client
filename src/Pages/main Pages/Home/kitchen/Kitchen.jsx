import React from "react";
import "./kitche.css";
import { Col, Container, Row } from "react-bootstrap";

const Kitchen = () => {
  return (
    <div>
      <h1 className="kit_heading">Kitchen Staff</h1>
      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <div className="">
              <div className="kitchen_body">
                <img
                  className="mt-5"
                  src="../../../../../public/images/kitchen-1.jpg"
                  alt=""
                />
                <img
                  className="kit_bg"
                  src="../../../../../public/images/kitchen-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col className="d-flex align-items-center" lg={6}>
            <div className="">
              <h1 className="kit_title">
                Pro chefs truly devoted to their craft
              </h1>
              <p>
                Et netus et malesuada fames ac turpis egestas integer eget. Urna
                nunc id cursus metus aliquam eleifend mi in. Id cursus metus
                aliquam eleifend mi in nulla posuere sollicitudin. Eget felis
                eget nunc lobortis. Lacinia at quis risus sed vulputate odio ut.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kitchen;
