import React, { useEffect, useState } from "react";
import "./ChefFetails.css";
import { useLoaderData, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const ChefDetails = () => {
  const [datastate, setDataState] = useState({});
  const { id: idUrl } = useParams();
  const chefDetails = useLoaderData();

  useEffect(() => {
    const findingid = chefDetails.find((i) => i.id == idUrl);
    setDataState(findingid);
  }, [chefDetails, idUrl]);

  const {
    id,
    name,
    recipeName,
    image,
    ingredients,
    cookingMethod,
    rating,
    recipe_image,
    yearsOfExperience,
    numberOfRecipes,
    description,
    likes,
  } = datastate;

  console.log(datastate);

  return (
    <section className="details_bg">
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
              <img className="chef_img" src={image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChefDetails;
