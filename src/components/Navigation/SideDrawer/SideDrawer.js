import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import logo from "../../../assets/images/logo.svg";
import { TiHome } from "react-icons/ti";
import { IoIosStats } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink to="/">
            <img src={logo} style={{ width: "50%" }} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <TiHome className="link-icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink smooth to="/stats">
            <IoIosStats className="link-icon" />
            Stats
          </NavLink>
        </li>
        <li>
          <NavLink to="/process">
            <BsFillGearFill className="link-icon" />
            Process
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
