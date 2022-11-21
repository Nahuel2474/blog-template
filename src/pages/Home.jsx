import React from "react";
import Hero from "../components/Hero";
import Post from "../components/Post";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div className="z-20 flex flex-col justify-center items-center">
      <Hero />
      <Post />
      <Pagination />
      <br />
    </div>
  );
};

export default Home;
