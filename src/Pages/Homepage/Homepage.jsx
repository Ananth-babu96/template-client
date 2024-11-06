import React from "react";
import "./Homepage.scss";
import Hero from "../../Components/Hero/Hero";
import AutoSlider from "../../Components/AutoSlider/AutoSlider";
import { IoIosHeart } from "react-icons/io";
import Button from "../../Components/Button/Button";
import Services from "../../Components/Services/Services";
import About from "../../Components/About/About";
import Testimonials from "../../Components/Testimonials/Testimonials";
import SectionDivider from "../../Components/SectionDivider/SectionDivider";
import Gallery from "../../Components/Gallery/Gallery";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Homepage = () => {
   return (
      <div className="home">
         <Hero />
         <About />
         <SectionDivider />
         <Services />
         <SectionDivider />
         <Gallery />
         <SectionDivider />
         <Testimonials />
         <SectionDivider />
         <Contact />
         <SectionDivider />
         <Footer />
      </div>
   );
};

export default Homepage;
