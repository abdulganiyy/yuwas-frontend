import React from "react";
import "./Menubar.css";
// import logo from "../../assets/yuswas.png";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [mobileActive, setMobileActive] = React.useState(false);
  return (
    <header className="header">
      <div className="header-primary">
        <div className="logo-box">
          {/* <img src={logo} alt="yuswas-logo" className="logo" /> */}
          YUSWAS
        </div>
        <div className="social-icons">
          <span className="social-icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </span>
          <span className="social-icon">
            <ion-icon name="logo-twitter"></ion-icon>
          </span>
          <span className="social-icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </span>
        </div>
      </div>
      <div className="header-secondary">
        <nav className="navbar">
          <ul className="navigation-items">
            <li className="nav-item">
              <Link>HOME</Link>
            </li>
            <li className="nav-item">
              <Link>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link>OUR TEAM</Link>
            </li>
            <li className="nav-item">
              <Link>PROJECT</Link>
            </li>
            <li className="nav-item">
              <Link>CONTACT</Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-mobile">
          <span
            className="menu-icon"
            onClick={() => setMobileActive(!mobileActive)}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </span>
          <ul
            className={
              mobileActive
                ? "navigation-items"
                : "navigation-items navigation-items-hidden"
            }
          >
            <li className="nav-item">
              <Link>HOME</Link>
            </li>
            <li className="nav-item">
              <Link>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link>OUR TEAM</Link>
            </li>
            <li className="nav-item">
              <Link>PROJECT</Link>
            </li>
            <li className="nav-item">
              <Link>CONTACT</Link>
            </li>
          </ul>
        </nav>
        <div className="search-group">
          <input type="text" className="search-input" placeholder="Search" />
          <button type="submit" className="search-button">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Menubar;
