import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
    recipeName,
    image,
    ingredients,
    cookingMethod,
    rating,
    recipe_image,
  } = datastate;

  console.log(datastate);

  return <div></div>;
};

export default ChefDetails;
