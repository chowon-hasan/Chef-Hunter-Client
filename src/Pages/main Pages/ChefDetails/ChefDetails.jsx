import React, { useEffect, useState } from "react";
import "./ChefFetails.css";
import { useLoaderData, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Recipes from "../Recipes/Recipes";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const [datastate, setDataState] = useState({});
  const { id: idUrl } = useParams();
  const chefDetails = useLoaderData();

  useEffect(() => {
    const findingid = chefDetails.find((i) => i.id == idUrl);
    setDataState(findingid);
  }, [chefDetails, idUrl]);

  const {
    name,
    image,
    yearsOfExperience,
    numberOfRecipes,
    description,
    likes,
  } = datastate;

  console.log(datastate);

  return (
    <section>
      <div className="details_bg">
        <Container>
          <Row>
            <Col className="d-flex align-items-center" lg={6}>
              <div className="details_content">
                <h1>{name}</h1>
                <p>{description}</p>
                <div className="main_details">
                  <span>Number Of Recipes {numberOfRecipes}</span>
                  <span>Likes {likes}</span>
                  <span>Experience {yearsOfExperience} Years</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center">
                <LazyLoad>
                  <img className="chef_img" src={image} alt="" />
                </LazyLoad>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="">
        <Recipes></Recipes>
      </Container>
    </section>
  );
};

export default ChefDetails;
