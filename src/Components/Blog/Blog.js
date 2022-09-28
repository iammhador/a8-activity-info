import React from "react";

const Blog = () => {
  return (
    <div className="container my-3">
      <h1 className="grid place-content-center text-3xl font-bold ">
        Blog Section
      </h1>
      <div className="mx-5 my-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
            How Does React Work?
          </div>
          <div className="collapse-content">
            <p>
              ReactJS divides the UI into isolated reusable pieces of code known
              as components. React components work similarly to JavaScript
              functions as they accept arbitrary inputs called properties or
              props. It's possible to have as many components as necessary
              without cluttering your code
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
            Difference Between Props And State ?
          </div>
          <div className="collapse-content">
            <p>
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components. The this. setState
              property is used to update the state values in the component.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
            Without Data Load, What Is The Other Purpose Of useEffect ?
          </div>
          <div className="collapse-content">
            <p>
              useEffect is a react hook. React side effect handle useEffect main
              work. For example: Data load, setTimer, Dom Manipulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
