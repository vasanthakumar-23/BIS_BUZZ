import React, { useState } from "react";
import door from "../images/background/door1.png";
import room1 from "../images/background/room1.png";
import bookshelf from "../images/background/bookshelf.png";
import pot from "../images/img/pot.png";
import potQuest from "../images/quest/pot_quest.png";
import { Link } from "react-router-dom";
import Key1 from "../images/img/key1.png";
import portray from "../images/quest/r1-frame.png";
import bookQuest from "../images/quest/r1-book.png";
import Notification from "../components/Notification";



const Room1 = () => {
  const [paint, setPainting] = useState(false);
  const [book, setBook] = useState(false);
  const [key, setKey] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="bg-stone-800 h-screen">
      {show?(<Notification/>):null}
      <img src={room1} className="w-[110%] h-screen  " alt="" />
      <button
        className="absolute  right-[40rem] top-48 w-52 h-44 "
        onClick={() => setPainting((s) => !s)}
      ></button>
      <button
        className="absolute  left-[38rem] top-[36rem] w-52 h-32  "
        onClick={() => {setBook(s=>!s)}}
      ></button>
      <Link to="/room1/bookshelf">
        <button className=" p-4 absolute  right-[8rem] top-36 w-52 h-80 "></button>
      </Link>
      {/* paintQuest */}
      {paint ? (
        <div className="absolute ">
          <img
            src={portray}
            alt=""
            className="relative z-0 bottom-[44rem] left-[36rem] border-2 w-80 h-96 object-cover"
          />
          <div className="absolute  bottom-[48rem] left-[38rem] flex flex-row gap-5">
            <button
              className="green"
              onClick={() => {
                setPainting((s) => !s);
                setKey((k) => !k);
              }}
            >
              Yes
            </button>
            <Link to="/room1">
              <button className="red" onClick={() => {  setPainting((s) => !s) }}>
                No
              </button>
            </Link>
          </div>
        </div>
      ) : null}
      {key ? (
        <div>
          <img
            src={Key1}
            alt=""
            className="absolute bottom-[20rem] left-[36rem]  w-80 h-96"
          />
          <Link to="/door2">
            <button className="bg-blue-400 text-xl font-semibold p-3 absolute bottom-8 right-20 w-36 h-20 shadow-lg rounded-xl">
              Next
            </button>
          </Link>
        </div>
      ) : null}
      {/* //Book quest */}
      {book? (
        <div>
          <img
            src={bookQuest}
            alt=""
            className="relative z-10 bottom-[44rem] left-[30rem]  w-[35rem] h-[23.1rem] object-cover"
          />
          <div className="absolute z-20 top-80 left-[41rem] flex flex-row gap-5">
            <button
              className="select mr-36"
              onClick={() => {
                setBook((s) => !s);
                setKey((k) => !k);
              }}
            >
              Select
            </button>
            <Link to="/room1">
              <button
                className="select"
                onClick={() => {
                  setBook((s) => !s);
                  setShow(s=>!s)
                  
                }}
              >
                Select
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const Bookshelf = () => {
  const [open, setOpen] = useState(false);
  const [quest1, setQuest] = useState(false);
  const [key, setKey] = useState(false);
  return (
    <div>
      <img src={bookshelf} className="w-full h-screen" alt="" />

      <button
        onClick={() => setOpen((p) => !p)}
        className=" p-4 absolute  right-[34rem] top-[25rem] w-52 h-20 "
      ></button>

      {open ? (
        <div className="absolute top-1/2 left-1/2">
          <img
            src={pot}
            onClick={() => {
              setOpen((p) => !p);
              setQuest((e) => !e);
            }}
            className="w-48 h-48"
            alt=""
          />
        </div>
      ) : null}
      {quest1 ? (
        <div className="relative">
          <img
            className="absolute bottom-[14rem] left-[42rem] w-80 h-96"
            src={potQuest}
            alt=""
          />
          <div className="absolute bottom-[20rem] left-[46rem] flex flex-row gap-5">
            <button
              className="green"
              onClick={() => {
                setQuest((s) => !s);
                setKey((k) => !k);
              }}
            >
              Yes
            </button>
            <Link to="/room1">
              <button className="red">No</button>
            </Link>
          </div>
        </div>
      ) : null}
      {key ? (
        <div className="absolute bottom-[14rem] left-[42rem] w-80 h-96">
          <img src={Key1} />
          <Link to="/door2">
            <button className="bg-blue-400 text-xl font-semibold p-3 absolute -top-28 -right-80 w-36 h-20 shadow-lg rounded-xl">
              Next
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export const Door1 = () => {
  return (
    <div>
      <img src={door} className="w-full h-[99vh] overflow-hidden" alt="" />
      <Link to="/room1">
        <button className="absolute top-1/2 left-[48%]  p-4 text-xl text-white bg-tranaprent border-2 border-green-400 hover:bg-green-400 w-32">
          Enter
        </button>
      </Link>
    </div>
  );
};

export default Room1;
