import React from "react";
import "./Navbar.css";
import airbnbLogo from "../../assets/images/airbnb-logo.svg";

const Navbar = () => {
  return (
    <section className="navigation">
      <nav className="nav">
        <img src={airbnbLogo} alt="" />
      </nav>
    </section>
  );
};

export default Navbar;
