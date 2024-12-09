import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quest2 from "../images/quest/r3-cb2.png";
import Quest1 from "../images/quest/r3-shelf.png";
import Notification from "../components/Notification";

const Room3 = () => {
  const [quest1, setQuest1] = useState(false);
  const [quest2, setQuest2] = useState(false);
  const [key, setKey] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="room3 h-screen bg-center">
      {show?(<Notification/>):null}
      <button
        className="absolute left-[30rem] w-96 h-80 top-20 "
        onClick={() => setQuest1((s) => !s)}
      >
        
      </button>
      <button
        className="absolute bottom-16 right-72 w-96 h-48 "
        onClick={() => setQuest2((s) => !s)}
      >
        
      </button>

      {quest1 ? (
        <div>
          <img
            src={Quest1}
            className="absolute top-[30%] w-96 h-72 left-[39%]"
          />
          <div className="absolute z-20 top-[28rem] left-[43rem] flex flex-row gap-5">
            <Link to="/game">
              <button className="select mr-36" onClick={() => {}}>
                Select
              </button>
            </Link>
            <button
              className="select"
              onClick={() => {
                setQuest1((s) => !s);
                setShow((s) => !s);
              }}
            >
              Select
            </button>
          </div>
        </div>
      ) : null}

      {/* quest2 */}

      {quest2 ? (
        <div>
          <img
            src={Quest2}
            className="relative top-56 w-96 h-96 left-[39%]"
          />
          <div className="absolute left-[45%] bottom-48">
            <Link to="/game">
              <button className="green">Yes</button>
            </Link>
            <button className="red" onClick={() => { setQuest2((s) => !s); setShow(s=>!s) }}>
              No
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export function Door3() {
  return (
    <div className="door3 object-cover bg-no-repeat h-screen bg-center w-full bg-green-900">
      <Link to="/room3">
        <button className="bg-blue-500 text-xl p-3 rounded-lg text-white font-semibold relative left-[43%] top-[61%] w-44 h-20">
          Enter
        </button>
      </Link>
    </div>
  );
}

export default Room3;
