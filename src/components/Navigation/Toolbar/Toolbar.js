import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import logo from "../../../assets/images/logo.svg";
import { TiHome } from "react-icons/ti";
import { IoIosStats } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
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
              <NavLink smooth to="/stats#results">
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
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
