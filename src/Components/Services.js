import React from "react";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Content.module.css";

export const ServicesIntro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="Services" className={Styles.ServicesIntro}>
      <div
        className={Styles.ParentServices}
        data-aos="zoom-in-left"
        data-aos-duration="2500"
      >
        <div />
        <h5>MY SERVICES</h5>
      </div>
      <h1 data-aos="zoom-in-left" data-aos-duration="2500">
        What I Can Do
      </h1>
    </section>
  );
};

const Services = ({ image, heading, content }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      className={Styles.ServicesMain}
      data-aos="zoom-in-right"
      data-aos-duration="2500"
    >
      <section>
        <div>
          <img src={image} alt="img" />
        </div>
        <h3>{heading}</h3>
        <h6>{content}</h6>
      </section>
    </main>
  );
};

export default Services;
