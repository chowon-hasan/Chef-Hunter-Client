import React, { useEffect, useState } from "react";
import "./Chefs.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chef-hunter-server-chowon-hasan.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

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
          <Col key={c.id} lg={4}>
            <div className="chefs_card">
              <img src={c.image} alt="" />
              <div className="ms-3">
                <h3 className="mt-4">Name : {c.name}</h3>
                <p>Years of Experience : {c.yearsOfExperience}</p>
                <p>Number of Recipes : {c.numberOfRecipes}</p>
                <p>Likes : {c.likes}</p>
                <Link to={`/chefDetails/${c.id}`}>
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
