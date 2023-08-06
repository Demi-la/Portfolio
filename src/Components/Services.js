import React from "react";

import Styles from "../Styles/Content.module.css";

export const ServicesIntro = () => {
  return (
    <section id="Services" className={Styles.ServicesIntro}>
      <div
        className={Styles.ParentServices}
        data-aos="zoom-in-left"
        data-aos-duration="3000"
      >
        <div />
        <h5>MY SERVICES</h5>
      </div>
      <h1 data-aos="zoom-in-left" data-aos-duration="3000">
        What I Can Do
      </h1>
    </section>
  );
};

const Services = ({ image, heading, content }) => {
  return (
    <main
      className={Styles.ServicesMain}
      data-aos="zoom-in-right"
      data-aos-duration="3000"
    >
      {/* <section> */}
      <div>
        <img src={image} alt="img" />
      </div>
      <h3>{heading}</h3>
      <h6>{content}</h6>
      {/* </section> */}
    </main>
  );
};

export default Services;
