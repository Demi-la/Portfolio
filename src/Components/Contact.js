import React, {useRef} from "react";
import Styles from "../Styles/Footer.module.css";
import emailjs from "emailjs-com"


  

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l262ust",
      "template_w1jmn9a",
      form.current,
      "vSnq1YjhSfmHOrQ38"
    );

 

    e.target.reset();
  };
  return (
    <section id="Contact" className={Styles.ContactContainer}>
      <div className={Styles.ParentContact}>
        <div className={Styles.ChildContact}>
          <div className={Styles.line} />
          <h3>Get In Touch</h3>
          <div className={Styles.line} />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              placeholder=" YOUR SURNAME"
              type="text"
              name="name"
              style={{ outline: "none" }}
            />
            <input
              placeholder=" YOUR FIRST NAME"
              type="text"
              name="name"
              style={{ outline: "none" }}
            />
          </div>
          <input
            placeholder=" YOUR EMAIL"
            type="email"
            name="email"
            style={{ outline: "none" }}
          />
          <textarea
            placeholder=" YOUR MESSAGE"
            name="message"
            style={{ outline: "none" }}
          ></textarea>
          <button className="btn" style={{width: "10rem", position: "relative", top: "-5rem"}} type="submit">SEND</button>
        </form>
        {/* <a href="mailto:adebiyio28@gmail.com" target="_blank" rel="noreferrer">
          <button type="submit">SEND</button>
        </a> */}
      </div>
    </section>
  );
};

export default Contact;
