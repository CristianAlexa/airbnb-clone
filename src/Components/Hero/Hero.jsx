import React from "react";
import "./Hero.css";
import heroImg from "../../assets/images/photo-grid.png";

export default function Hero() {
  return (
    <section>
      <div className="hero">
        <img className="hero__img" src={heroImg} alt="" />
        <div className="hero__text">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </section>
  );
}
