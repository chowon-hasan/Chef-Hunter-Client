import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./recipes.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart, FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    fetch("https://chef-hunter-server-chowon-hasan.vercel.app/")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleFavIcon = (event) => {
    event.target.disabled = true;
    toast("Added On Favorite List");
    setDisabled(true);
  };

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
              <div className="rating_bg py-1 px-3 text-white">
                <Rating
                  placeholderRating={d?.rating}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStarHalf />}
                  readonly
                />
                <div className="flex-grow-3">
                  <Button className="icon_btn" onClick={handleFavIcon}>
                    <FaHeart />
                    <ToastContainer />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Recipes;
