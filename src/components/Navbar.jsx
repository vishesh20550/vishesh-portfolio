import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css";
import { MouseContext } from '../contexts/mouse-context';
import logo from '../assets/logo.png'

export default function Navbar() {
    
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt='logo'/>
      <ul className="navlist">
        <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink className="nav-link" to={"/"}>
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
        <li
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavLink
            className="nav-link"
            to={"/experience"}
          >
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
        </li>
      </ul>
    </nav>
  );
}
