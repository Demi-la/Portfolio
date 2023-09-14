import React, { useState } from "react";
import Styles from "../Styles/Header.module.css";
import iconLogo from "../Assets/iconlogo.png";
import logoIcon from "../Assets/logoIcon.png";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggler = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <>
      <section style={{ padding: "32px" }} className={Styles.NavbarContainer}>
        <a
          href="Home"
          style={{ color: "#CDC3BE", fontWeight: "800", fontSize: "30px" }}
        >
          {/* <img src={iconLogo} alt="logo" /> */}
          <h1>DEMI.LADE</h1>
        </a>
        <nav>
          <a href="Home" activeClass="active">
            Home
          </a>
          <a href="#About" activeStyle={Styles.ActiveState}>
            About
          </a>
          <a href="#Skills" activeClass="active">
            Skills
          </a>
          <a href="#Services" activeClass="active">
            Services
          </a>
          <a href="#Projects" activeClass="active">
            Projects
          </a>
          <a href="#Contact" activeClass="active">
            Contact
          </a>
        </nav>
        <div
          style={{ padding: "50px" }}
          className={Styles.hamburger}
          onClick={toggler}
        >
          <div className={Styles.lines}></div>
          <div className={Styles.lines}></div>
          <div className={Styles.lines}></div>
        </div>
      </section>
      <div>
        {open && (
          <div
            className={Styles.menuMobile}
            data-aos="flip-left"
            data-aos-duration="3100"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: '4rem'
              }}
            >
              <a
                href="Home"
                style={{
                  color: "#CDC3BE",
                  fontWeight: "800",
                  fontSize: "40px",
                  
                }}
              
                ><h1>DEMI.LADE</h1>
              </a>
              <div onClick={closeNavbar}>
                <AiOutlineClose style={{ marginLeft: "80%" }} />
              </div>
            </div>

            <a
              onClick={() => setOpen(false)}
              href="Home"
              className="home active"
            >
              Home
            </a>
            <a onClick={() => setOpen(false)} href="#About" className="about">
              About
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#Skills"
              className="contact"
            >
              Skills
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#Services"
              className="Services"
            >
              Services
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#Projects"
              className="Project"
            >
              Project
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#Contact"
              className="Contact"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
