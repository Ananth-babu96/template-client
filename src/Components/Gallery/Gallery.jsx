import React from "react";
import "./Gallery.scss";

import img1 from "../../assets/gallery-images/img1.webp";
import img2 from "../../assets/gallery-images/img2.webp";
import img3 from "../../assets/gallery-images/img3.webp";
import img4 from "../../assets/gallery-images/img4.webp";
import img5 from "../../assets/gallery-images/img5.webp";
import img6 from "../../assets/gallery-images/img6.webp";
import img7 from "../../assets/gallery-images/img7.webp";
import img8 from "../../assets/gallery-images/img8.webp";
import img9 from "../../assets/gallery-images/img9.webp";
import img10 from "../../assets/gallery-images/img10.webp";
import img11 from "../../assets/gallery-images/img11.webp";
import img12 from "../../assets/gallery-images/img12.webp";
import img13 from "../../assets/gallery-images/img13.webp";
import img14 from "../../assets/gallery-images/img14.webp";
import img15 from "../../assets/gallery-images/img15.webp";
import img16 from "../../assets/gallery-images/img16.webp";
import img17 from "../../assets/gallery-images/img17.webp";
import img18 from "../../assets/gallery-images/img18.webp";
import img19 from "../../assets/gallery-images/img19.webp";
import img20 from "../../assets/gallery-images/img20.webp";
import img21 from "../../assets/gallery-images/img21.webp";
import img22 from "../../assets/gallery-images/img22.webp";
import img23 from "../../assets/gallery-images/img23.webp";
import img24 from "../../assets/gallery-images/img24.webp";
const Gallery = () => {
   const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
      img22,
      img23,
      img24,
   ];
   return (
      <section className="section gallery">
         <div className="section_title">
            <h2>Our Latest Works</h2>
         </div>
         <div className="gallery_grid">
            {images?.map((image, index) => {
               return (
                  <div>
                     <img src={image} />
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Gallery;
