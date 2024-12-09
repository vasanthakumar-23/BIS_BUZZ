import React from "react";
import { Link } from "react-router-dom";
import Cat1 from "../images/img/cat1.png";
import Cat2 from "../images/img/cat2.png";
import BIS from "../images/img/bis.png"

const Home = () => {
  return (
    <div className="home">
      <img src={BIS} alt="" className="absolute top-0 left-0" />
      <Link to="/game">
        <button className="bg-transparent w-48 text-blue-800 text-4xl tracking-wider border-2 relative left-[38rem] my-60 p-2">
          <span className="cursor-pointer">Lets Start</span>
        </button>
      </Link>
    </div>
  );
};
export const Game = () => {
  return (
    <div className="game w-full h-screen object-contain bg-no-repeat bg-center overflow-hidden">
      <img src={BIS} alt="" className="absolute top-32 left-[44%]" />
      <Link to="/start">
        <button
          to="/start"
          className="relative  w-96 top-[90%] mx-[38%] rounded-2xl p-8 "
        >
          .
        </button>
      </Link>
    </div>
  );
};
export const Start = () => {
  return (
    <div className="start flex flex-col w-full h-screen object-contain bg-no-repeat bg-center overflow-hidden">
      <h1 className="bg-blue-500 p-6 rounded-3xl w-96 mx-auto text-center ">
        Game Categories
      </h1>
      <div className="flex flex-row justify-around mt-20">
        <Link to='/door1'>
          <div>
            <img src={Cat1} className="w-64 h-80 object-cover" alt="" />
            <h2 className="text-white text-center text-4xl my-5 font-semibold">
              Escape room
            </h2>
          </div>
        </Link>

        <Link to="/museum">
          <div>
            <img src={Cat2} className="w-64 h-80 object-cover" alt="" />
            <h2 className="text-white text-center text-4xl my-5 font-semibold">
              Museum
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
