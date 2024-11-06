import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/images/new-hero-img.jpeg";
const Hero = () => {
   return (
      <section className="hero">
         <h1 className="hero_title">Wedding Photography in Kumbakonam</h1>
         <p className="hero_description">
            Every From weddings and pre-weddings to maternity and baby shoots,
            we capture life's beautiful milestones.
         </p>
      </section>
   );
};

export default Hero;
