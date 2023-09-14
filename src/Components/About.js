import React from "react";
import Chisom from "../Assets/Chisom.png";
import styles from "../Styles/Content.module.css";
import profile from "../Assets/profile.JPG"
import CTA from "./cta";

const About = ({ handleOpen }) => {
  return (
    <section
      className={styles.ContentContainer}
      id="About"
      style={{ Height: "760px" }}
    >
      <main>
        <span data-aos="zoom-in-right" data-aos-duration="3300">
          <img
            src={profile}
            alt="avi"
            style={{ height: "510px", width: "100%", borderRadius: "6px" }}
          />
        </span>
        <div
          className={styles.ParentAbout}
          data-aos="zoom-in-left"
          data-aos-duration="3300"
        >
          <div className={styles.ChildAbout}>
            <div />
            <h5>ABOUT ME</h5>
          </div>
          <h1>Who Am I</h1>
          <p>
            Greetings, I'm a dedicated frontend developer. My focus lies in
            creating seamless and user-centric designs. My passion lies in
            making the digital world not only functional but also aesthetically
            pleasing.
          </p>
          <br />
          <p>
            With an eye for detail, I've honed my skills in responsive design
            and web accessibility, ensuring that every project I touch provides
            an exceptional user experience. I'm a firm believer in the power of
            continuous learning, and I'm always exploring the latest tools and
            frameworks to stay at the forefront of web development.
          </p>
          <br />
          <p>
            Collaboration is at the heart of my work. I've had the privilege of
            working with diverse teams, from designers to backend developers,
            and I thrive in environments where different perspectives converge
            to create outstanding products. I'm excited about the ever-evolving
            field of frontend development and the endless possibilities it
            offers.
          </p>
          <button onClick={handleOpen}>View CV</button>{" "}
          <button><CTA/></button>
        </div>
      </main>
    </section>
  );
};

export default About;
