import React from "react";
import "./Contact.scss";
const Contact = () => {
   return (
      <section className="section contact">
         <div className="section_title">
            <h2>Get in Touch</h2>
         </div>

         <form>
            <p>
               We're excited to hear from you and capture your special
               moments...
            </p>
            <input type="text" name="" id="" placeholder="Name" />
            <input type="number" name="" id="" placeholder="Phone Number" />
            <input type="email" name="" id="" placeholder="Email (optional) " />
            <textarea name="" id="" placeholder="Message"></textarea>
            <input type="submit" value="SEND" />
         </form>
      </section>
   );
};

export default Contact;
