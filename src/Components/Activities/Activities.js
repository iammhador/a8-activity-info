import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Info from "../info/Info";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="activity-card">
      <div className="product-container lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 lg:gap-5 md:gap-5 sm:gap-5 mx-5 my-5 ">
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity}></Activity>
        ))}
      </div>
      <div className="activity-info py-5 my-5 h-5/6  bg-neutral rounded-lg">
        <Info />
      </div>
    </div>
  );
};

export default Activities;
