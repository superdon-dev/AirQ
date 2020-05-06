import React from "react";
import { NavLink } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { IoIosStats } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import "./Footer.css";

const Footer = (props) => {
  var dt = new Date();
  return (
    <header className="footer">
      <nav className="footer__navigation">
        <div className="toolbar__text">
          Developed by Superdon &copy; AirQ {dt.getFullYear()}
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <NavLink to="/">
                <TiHome className="link-icon" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <IoIosStats className="link-icon" />
                Stats
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <BsFillGearFill className="link-icon" />
                Process
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Footer;
