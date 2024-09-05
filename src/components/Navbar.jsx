import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { MouseContext } from "../contexts/mouse-context";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <img src={logo} className="logo" alt="logo" />

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`navlist ${isOpen ? "active" : ""}`}>
        <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink className="nav-link" to={"/"} >
            Home
          </NavLink>
        </li>
        <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink className="nav-link" to={"/about"}>
            About
          </NavLink>
        </li>
        <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink className="nav-link" to={"/skills"}>
            Skills
          </NavLink>
        </li>
        {/* <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink className="nav-link" to={"/experience"}>
            Experience
          </NavLink>
        </li>
        <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink className="nav-link" to={"/projects"}>
            Projects
          </NavLink>
        </li>
        <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink className="nav-link" to={"/contact"}>
            Contact
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
