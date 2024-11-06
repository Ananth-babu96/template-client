import React, { useEffect, useState } from "react";
import "./Testimonials.scss";
import testimonial1 from "../../assets/images/testimonial-guy.jpg";
import testimonial2 from "../../assets/images/testimonial2.jpg";
import testimonial3 from "../../assets/images/testimonial3.jpg";
import { FaStar } from "react-icons/fa6";
const Testimonials = () => {
   const [index, setIndex] = useState(0);
   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % testimonialArr.length);
      }, 2000);

      return () => clearInterval(interval);
   }, []);
   const testimonialArr = [
      {
         image: testimonial1,
         name: "Arvind.D",
         reivew:
            '"' +
            "I'am very satisfied with their service, Honestly they are the best" +
            '"',
      },
      {
         image: testimonial2,
         name: "Muthu Ram",
         reivew:
            '"' +
            "The whole team does an outstanding job right from the photoshoot till handling over the final copy without any flaws" +
            '"',
      },
      {
         image: testimonial3,
         name: "Vinay Dheeksha",
         reivew:
            '"' +
            "G studios is perfect choice to capture your moments, All the pictures wehre lively and really beautyfull" +
            '"',
      },
   ];
   return (
      <section className="section testimonials">
         <div className="section_title">
            <h2>Stories of Joy</h2>
         </div>

         <div className="testimonials_container">
            <div className={`slide _${index}`}>
               {testimonialArr?.map((item, index) => {
                  return (
                     <div className="testimonial">
                        <div className="testimonial_background"></div>
                        <div className="testimonial_image">
                           <img src={item.image} alt="" />
                        </div>
                        <div className="testimonial_text">
                           <h3>{item.name}</h3>
                           <p>{item.reivew}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
