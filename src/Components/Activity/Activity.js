import React from "react";

const Activity = ({ activity, setTimer, timer }) => {
  const { description, img, title, time } = activity;

  const handleChange = (t) => {
    setTimer(t + timer);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl image-full mb-5">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <h5>
          Activity Time : <span className="text-primary">{time}</span>{" "}
          <span className="text-primary">Min</span>
        </h5>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleChange(time)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
