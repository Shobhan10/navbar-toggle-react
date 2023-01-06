import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={() => setIsNav(!isNav)}>
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${isNav && "show-container"}`}>
          <ul className="links">
            {links.map((route) => {
              const { id, url, text } = route;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((route) => {
            const { id, url, icon } = route;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
