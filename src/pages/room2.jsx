import React, { useState } from "react";
import bedroom from "../images/background/bedroom.png";
import { Link } from "react-router-dom";
import Drawer from "../images/img/drawer.png";
import quest2 from "../images/quest/r2-draw2.png";
import quest3 from "../images/quest/r2-ball.png";
import quest4 from "../images/quest/r2-pic.png";
import key2 from "../images/img/key2.png";
import Notification from "../components/Notification";

const Room2 = () => {
  const [drawer, setDrawer] = useState(false);
  const [quest1, setQuest1] = useState(false);
  const [Quest2, setQuest2] = useState(false);
  const [Quest3, setQuest3] = useState(false);
  const [key, setKey] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-hidden">
      {show ? <Notification /> : null}
      <img src={bedroom} className="w-full h-screen z-0 none" />
      <button
        className=" w-32 h-24  z-10 absolute bottom-16 right-96"
        onClick={() => {
          setDrawer((draw) => !draw);
        }}
      ></button>
      <button
        className=" w-32 h-24  z-10 absolute bottom-48 right-60"
        onClick={() => {
          setQuest2((s) => !s);
        }}
      ></button>
      <button
        className=" w-32 h-24  z-10 absolute bottom-96 left-32"
        onClick={() => setQuest3((s) => !s)}
      ></button>

      {/* darwer */}

      {drawer ? (
        <div
          onClick={() => {
            setDrawer((s) => !s);
            setQuest1((e) => !e);
          }}
        >
          <img
            src={Drawer}
            className="w-[30rem] h-80 object-cover absolute  top-48 left-[35%] z-10"
            alt=""
          />
        </div>
      ) : null}
      {quest1 ? (
        <div>
          <img
            src={quest2}
            className="w-[30rem] h-80 object-cover absolute  top-48 left-[35%] z-10"
          />
          <div className="absolute z-20 top-[28rem] left-[41rem] flex flex-row gap-5">
            <Link to="/room2">
              <button
                className="select mr-36"
                onClick={() => {
                  setQuest1((s) => !s);
                  setShow((s) => !s);
                }}
              >
                Select
              </button>
            </Link>
            <button
              className="select"
              onClick={() => {
                setKey((k) => !k);
                setQuest1((s) => !s);
              }}
            >
              Select
            </button>
          </div>
        </div>
      ) : null}
      {/* key */}

      {key ? (
        <div onClick={() => setKey((s) => !s)}>
          <img
            src={key2}
            className="w-[25rem] h-[30rem] object-contain absolute  top-36 left-[35%] z-10"
            alt=""
          />
          <Link to="/door3">
            <button className="bg-blue-400 text-xl font-semibold p-3 absolute top-10 right-20 w-36 h-20 shadow-lg rounded-xl">
              Next
            </button>
          </Link>
        </div>
      ) : null}

      {/* quest2 */}

      {Quest2 ? (
        <div className="relative">
          <img
            src={quest3}
            alt=""
            className="relative w-96 h-[30rem] object-cover bottom-[39rem] left-[35%] z-10 "
          />
          <div className="absolute  z-20 overflow-hidden -top-80 left-[38rem]  flex flex-row gap-5">
            <button
              className="green"
              onClick={() => {
                setQuest2((s) => !s);
                
                setShow((s) => !s);
              }}
            >
              Yes
            </button>
            <Link to="/room2">
              <button
                className="red"
                onClick={() => {
                  setQuest2((s) => !s);
                  setKey((k) => !k);
                }}
              >
                No
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      {/* quest3 */}
      {Quest3 ? (
        <div className="relative">
          <img
            src={quest4}
            alt=""
            className="relative w-96 h-[30rem] object-cover bottom-[39rem] left-[35%] z-10 "
          />
          <div className="absolute  z-20 overflow-hidden -top-80 left-[38rem]  flex flex-row gap-5">
            <button
              className="green"
              onClick={() => {
                setQuest3((s) => !s);
                setKey((k) => !k);
              }}
            >
              Yes
            </button>
            <Link to="/room2">
              <button
                className="red"
                onClick={() => {
                  setQuest3((s) => !s);
                  setShow((s) => !s);
                }}
              >
                No
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export function Door2() {
  return (
    <div className="door2 h-screen bg-center">
      <Link to="/room2">
        <button className="bg-blue-500 text-xl p-3 rounded-lg text-white font-semibold relative left-[43%] top-[61%] w-44 h-20">
          Enter
        </button>
      </Link>
    </div>
  );
}

export default Room2;
