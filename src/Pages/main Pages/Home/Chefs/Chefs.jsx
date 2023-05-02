import React, { useEffect, useState } from "react";
import "./Chefs.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  //   const { id, image, name, yearsOfExperience, numberOfRecipes, likes } = chefs;

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  console.log(chefs);

  return (
    <Container className="my-5">
      <Row>
        <div className="text-center chefs_heading">
          <h1>Our Chef's</h1>
          <p>
            Pride of our Italy famous chefs behind the grandeur of Italian
            cuisine
          </p>
        </div>
        {chefs.map((c) => (
          <Col lg={4}>
            <div className="chefs_card" key={c.id}>
              <img src={c.image} alt="" />
              <div className="ms-3">
                <h3 className="mt-4">Name : {c.name}</h3>
                <p>Years of Experience : {c.yearsOfExperience}</p>
                <p>Number of Recipes : {c.numberOfRecipes}</p>
                <p>Likes : {c.likes}</p>
                <Link>
                  <Button className="details_btn">Chef Details</Button>
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Chefs;
