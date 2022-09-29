import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const Info = ({ timer, setBreaks, breaks }) => {
  const toast = () => {
    Swal.fire("Good job!", "You Activity Has Been Completed!", "success");
  };
  const breakTimeValue = (e) => {
    setBreaks(e);
  };
  return (
    <div className="px-5 py-5 bg-neutral rounded-xl">
      <div className="flex flex-cols-2 items-center	">
        <img
          src="https://cdn-icons-png.flaticon.com/512/924/924915.png"
          alt="avater"
          className="w-14"
        />
        <div className="text-secondary">
          <h3 className="text-base font-semibold">Mehedy Hasan Ador</h3>
          <p className="flex flex-col-2">
            <MapPinIcon className=" w-5 text-white" />
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 bg-info py-3 px-3 my-5 rounded justify-items-center">
        <div className="text-center">
          <p className="text-secondary">
            <span className="text-2xl font-bold text-secondary ">75</span>kg
          </p>
          <p className="text-sm font-medium	tracking-widest text-secondary">
            Weight
          </p>
        </div>
        <div className="text-center">
          <p className="text-secondary">
            <span className="text-2xl font-bold text-secondary ">176</span>cm
          </p>
          <p className="text-sm text-secondary font-medium	tracking-widest">
            Height
          </p>
        </div>
        <div className="text-center">
          <p className="text-secondary">
            <span className="text-2xl font-bold text-secondary ">21</span>years
          </p>
          <p className="text-sm text-secondary font-medium	tracking-widest">
            Age
          </p>
        </div>
      </div>
      <div className="my-5 py-5">
        <h2 className=" font-bold text-2xl text-secondary">
          Add A Break (Min) :
        </h2>
        <div className="bg-info flex justify-between	py-5 px-2 rounded my-3">
          <div className="bg-secondary text-neutral font-semibold p-2 mr-1 hover:bg-cyan-500 hover:text-secondary rounded-full ">
            <button onClick={(e) => breakTimeValue(e.target.innerText)}>
              10
            </button>
          </div>
          <div className="bg-secondary text-neutral font-semibold p-2 mr-1 rounded-full hover:bg-cyan-500 hover:text-secondary">
            <button onClick={(e) => breakTimeValue(e.target.innerText)}>
              20
            </button>
          </div>
          <div className="bg-secondary text-neutral font-semibold p-2 mr-1 rounded-full hover:bg-cyan-500 hover:text-secondary">
            <button onClick={(e) => breakTimeValue(e.target.innerText)}>
              30
            </button>
          </div>
          <div className="bg-secondary text-neutral font-semibold p-2 mr-1 rounded-full hover:bg-cyan-500 hover:text-secondary">
            <button onClick={(e) => breakTimeValue(e.target.innerText)}>
              45
            </button>
          </div>
          <div className="bg-secondary text-neutral font-semibold p-2 mr-1 rounded-full hover:bg-cyan-500 hover:text-secondary">
            <button onClick={(e) => breakTimeValue(e.target.innerText)}>
              60
            </button>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2 className=" font-bold text-2xl text-secondary">
          Activity Details :
        </h2>
        <div className="bg-info text-secondary flex justify-between	py-3 px-3 rounded my-3">
          <h3 className="text-lg font-medium">Activity Time</h3>
          <p>
            <span>{timer}</span> Minutes
          </p>
        </div>
        <div className="bg-info text-secondary flex justify-between	py-3 px-3 rounded my-3">
          <h3 className="text-lg font-medium">Break Time</h3>
          <p>
            <span>{breaks}</span> Minutes
          </p>
        </div>
      </div>
      <div className="grid justify-center ">
        <button
          onClick={() => toast()}
          className="bg-info px-5 py-2 rounded text-base font-semibold text-secondary hover:text-neutral hover:bg-cyan-400 my-5"
        >
          Activity Complete
        </button>
      </div>
    </div>
  );
};

export default Info;
