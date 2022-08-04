import React from "react";
import { FiMenu } from "react-icons/fi";
import Account from "./account";
import "./navbar.css";
import Search from "./search";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-width">
          <div className="logo">
            <div className="menu">
              <FiMenu />
            </div>
            <div className="logo-img">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png"
                alt=""
                width={40}
                height={23}
              />
              <span>YouTube</span>
            </div>
          </div>
          <Search />
          <Account />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
