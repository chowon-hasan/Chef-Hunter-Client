import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./recipes.css";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 heading">
        Chef's Made Special Appetizer
      </h1>
      <Row>
        {recipes.map((d) => (
          <Col key={d.id} lg={4}>
            <div className="recipes_card">
              <h3 className="text-center">
                <span className="recipes_title">{d.recipeName}</span>
              </h3>
              <img className="img-fluid" src={d.recipe_image} alt="" />
              <h5>
                Ingredients : <span>{d.ingredients}</span>
              </h5>
              <p>
                Method of cooking :{" "}
                <span>
                  {d.cookingMethod.length < 150 ? (
                    <>{d.cookingMethod}</>
                  ) : (
                    <>
                      {d.cookingMethod.slice(0, 200)}...
                      <Link>Read More</Link>
                    </>
                  )}
                </span>
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Recipes;
