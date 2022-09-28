import React from "react";
import Img from "../../logo.png";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral py-4 px-4">
        <div className="flex-1">
          <a
            href="index.html"
            className="btn btn-ghost normal-case text-xl text-primary hover:bg-info hover:text-secondary"
          >
            <img src={Img} alt="logo" className="w-10 pr-1" />
            Activity Info
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a
                href="blog.html"
                className="text-primary hover:bg-info hover:text-secondary "
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
