import React from "react";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Header.module.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={Styles.HeaderContainer}>
      <main>
        <h6 data-aos="fade-down" data-aos-duration="3000">
          Hello, My Name Is
        </h6>
        <h1 data-aos="fade-down" data-aos-duration="3000">
          CHISOM OGUINE
        </h1>
        <br />
        <br />
        <div className={Styles.ParentHeader}>
          <div
            className={Styles.line}
            data-aos="fade-left"
            data-aos-duration="3000"
          />
          <h5 data-aos="zoom-in" data-aos-duration="3000">
            A FRONTEND DEVELOPER
          </h5>
          <div
            className={Styles.line}
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>
        <div className={Styles.buttons}>
          <a
            className={Styles.Project}
            role="button"
            href="#Projects"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Projects
          </a>
          <a
            className={Styles.Contact}
            role="button"
            href="#Contact"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Contact
          </a>
        </div>
      </main>
    </section>
  );
};

export default Header;
