import React from "react";
import Banner from "./Banner/Banner";
import Chefs from "./Chefs/Chefs";
import Blogs from "./BlogsSection/Blogs";
import Kitchen from "./kitchen/Kitchen";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <Blogs></Blogs>
      <Kitchen></Kitchen>
    </div>
  );
};

export default Home;
