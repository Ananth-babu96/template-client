import React from "react";
import "./Services.scss";
import img1 from "../../assets/images/service-img-1.webp";
import img2 from "../../assets/images/service-img-2.webp";
import img3 from "../../assets/images/service-img-3.webp";
import { BsStars } from "react-icons/bs";
const Services = () => {
   const servicesArr = [
      {
         image: img1,
         title: "Wedding",
         description:
            "We capture the magic of your big day, preserving every kiss, smile, and joyous tear in stunning detail.We capture the magic of your big day, preserving every kiss, smile, and joyous tear in stunning detail.",
      },
      {
         image: img2,
         title: "Pre-Wedding",
         description:
            "Celebrate your journey to" +
            '"' +
            "I do" +
            '"' +
            "with romantic and fun-filled pre-wedding shoots that reflect your love story.",
      },
      {
         image: img3,
         title: "Maternity and Baby Shoot",
         description:
            "Cherish the anticipation and joy of motherhood with beautiful, natural photoshoots that highlight this special time.",
      },
   ];
   return (
      <section className="section services">
         <div className="section_title">
            <h2>Our Expertise</h2>
         </div>
         <div className="services_container">
            {servicesArr?.map((service, index) => {
               return (
                  <div className="services_section">
                     <div className="stars">
                        <BsStars />
                     </div>
                     <div className="stars">
                        <BsStars />
                     </div>
                     <div className="section_background"></div>
                     <div className="service_image">
                        <img src={service.image} alt="" />
                     </div>
                     <div className="service_text">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Services;
