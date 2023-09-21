import React from "react";
import Styles from "../Styles/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className={Styles.footer}>
      <main>
        <div>
          <div className={Styles.footerIcons}>
            <a
              target="_blank"
              href="https://github.com/Demi-la"
              rel="noreferrer"
            >
              <FaGithub
                style={{ width: "30px", height: "20px", marginTop: "5px" }}
              />
            </a>
          </div>
          <div className={Styles.footerIcons}>
            <a
              href="https://www.linkedin.com/in/adebiyi-oluwaseun-demilade-1b823a251/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                style={{ width: "30px", height: "20px", marginTop: "5px" }}
              />
            </a>
          </div>
          <div className={Styles.footerIcons}>
            <a
              href="mailto:adebiyio28@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail
                style={{ width: "30px", height: "20px", marginTop: "5px" }}
              />
            </a>
          </div>
        </div>
        <p>  2023 Adebiyi  oluwaseun  </p>
      </main>
    </section>
  );
};

export default Footer;
