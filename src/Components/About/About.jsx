import React from "react";
import "./About.scss";
import img from "../../assets/images/about-section-img.webp";
const About = () => {
   return (
      <section className="section about">
         <div className="section_title">
            <h2>About us</h2>
         </div>
         <div className="about_content">
            <p className="about_description">
               Based in the heart of <span>Kumbakonam</span>, we are passionate
               storytellers dedicated to <span>capturing</span> life's most{" "}
               <span>precious moments.</span>
               With a deep respect for the rich culture that surrounds us, our
               photography goes beyond mere images, we strive to create{" "}
               <span>timeless</span>
               <span> memories.</span> Each click of our camera is a testament
               to our love for photography and our commitment to excellence.
               Join us on this journey, and let's make your{" "}
               <span>special moments last forever.</span>
            </p>
            <div className="about_image">
               <img src={img} alt="" />
               <div className="background-design"></div>
            </div>
         </div>
      </section>
   );
};

export default About;
