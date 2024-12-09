import React from "react";
import background1 from "../images/background/museum.png";
import { Link, useParams } from "react-router-dom";

import vehicle from "../images/background/vehicle.png";
import cement from "../images/background/enna.png";
import electronics from "../images/background/electronic.png";
import pipes from "../images/background/pipes.png";

const Museum = () => {
  return (
    <div className="museum w-full h-screen  bg-no-repeat  overflow-hidden">
      <Link to="/museum/car">
        <button className=" p-4  absolute right-[40rem] top-16 w-52 h-18 "></button>
      </Link>
      <Link to="/museum/cement">
        <button className=" p-4 absolute  right-[18rem] top-32 w-52 h-24 "></button>
      </Link>
      <Link to="/museum/pipe">
        <button className=" p-4 absolute  left-[10rem] top-20 w-64 h-44 "></button>
      </Link>
      <Link to="/museum/electronic">
        <button className=" p-4 absolute  left-[36rem] top-48 w-72 h-44 "></button>
      </Link>

      <img src={background1} alt="" className="w-full  h-screen " />
    </div>
  );
};

export function Pipe() {
  return (
    <div>
      <img src={pipes} className="w-full  h-screen " alt="" />
      <Link to="/museum">
        <button className="absolute bottom-20 bg-blue-600 shadow-md text-white text-xl p-2 ml-1 w-32 h-20">
          <span>&larr;</span>Back
        </button>
      </Link>
    </div>
  );
}

export function Electronics() {
  return (
    <div>
      <img src={electronics} className="w-full  h-screen " alt="" />
      <Link to="/museum">
        <button className="absolute bottom-20 bg-blue-600 shadow-md text-white text-xl p-2 ml-1 w-32 h-20">
          <span>&larr;</span>Back
        </button>
      </Link>
    </div>
  );
}

export function Cement() {
  return (
    <div>
      <img src={cement} className="w-full  h-screen " alt="" />
      <Link to="/museum">
        <button className="absolute bottom-20 bg-blue-600 shadow-md text-white text-xl p-2 ml-1 w-32 h-20">
          <span>&larr;</span>Back
        </button>
      </Link>
    </div>
  );
}

export function Vehicle() {
  return (
    <div>
      <img src={vehicle} className="w-full  h-screen " alt="" />
      <Link to="/museum">
        <button className="absolute bottom-20 bg-blue-600 shadow-md text-white text-xl p-2 ml-1 w-32 h-20">
          <span>&larr;</span>Back
        </button>
      </Link>
    </div>
  );
}

export default Museum;
