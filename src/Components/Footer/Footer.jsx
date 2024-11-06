import React from "react";
import "./Footer.scss";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";
const Footer = () => {
   return (
      <section className="section footer">
         <h1>
            G<span>studios</span>
         </h1>
         <p>24/Anna nagar,</p>
         <p>Kumbakonam,</p>
         <p>Tamilnadu,612702</p>
         <div className="contact-info">
            <div className="email">
               <div className="icon">
                  <MdEmail />
               </div>
               <p>hello@gstudios.co</p>
            </div>
            <div className="phone">
               <div className="icon">
                  <FaPhone />
               </div>
               <p>989 492 9881</p>
            </div>
         </div>
         <div className="social">
            <div className="icon">
               <FaInstagramSquare />
            </div>
            <div className="icon">
               <FaSquareFacebook />
            </div>
            <div className="icon">
               <FaLinkedin />
            </div>
         </div>
         <p className="copyright">
            {" "}
            <span>
               <PiCopyright />
            </span>
            {new Date().getFullYear()}. All right reserved by gstudios
         </p>
      </section>
   );
};

export default Footer;
