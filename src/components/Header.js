import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.png";
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img
          src={require("../assets/Logo.svg")}
          alt="Little Lemon logo"
          className="nav-image"
        ></img>

        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <menu className={`navbar-menu`}>
        <Link className="hover-effect" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="hover-effect" to="/about">
          <h1>About</h1>
        </Link>
        <Link className="hover-effect" to="/menu">
          <h1>Menu</h1>
        </Link>
        <Link className="hover-effect" to="/reservations">
          <h1>Reservations</h1>
        </Link>
        <Link className="hover-effect" to="/order">
          <h1>Order</h1>
        </Link>
        <Link className="hover-effect" to="/login">
          <h1>Login</h1>
        </Link>
      </menu>
      {/* {navbarOpen ? <Navigation device="mobile" /> : ""} */}
    </nav>
  );
}
