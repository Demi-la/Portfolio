import React, { useState, useEffect } from "react";
import Styles from "../Styles/Content.module.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import Skills from "../Components/Skills";
import { SkillsIntro } from "../Components/Skills";
import Services from "../Components/Services";
import { ServicesIntro } from "../Components/Services";
import Projects, { ProjectIntro } from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer_";
import logo1 from "../Assets/logo1.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import logo6 from "../Assets/logo6.png";
import logo10 from "../Assets/logo10.png";
import logo11 from "../Assets/logo11.png";
import logo12 from "../Assets/logo12.png";
import cleanCode from "../Assets/cleanCode.png";
import responsive from "../Assets/responsive.png";
import frontend from "../Assets/frontend.png";
import webDesign from "../Assets/webDesign.png";
import restApi from "../Assets/restApi.png";
import webDev from "../Assets/webDev.png";
import advice_gen_app from "../Assets/advice_gen_app.png";
import pricing from "../Assets/pricing.jpg";
import tracker from "../Assets/tracker.jpg"
import tanta from "../Assets/tanta.png";
import notification from "../Assets/notiication.jpg";
import Dialog from "@mui/material/Dialog";
import resume from "../Assets/Adebiyi's resume.pdf"
import dogs from "../Assets/dogs.png"
import market from "../Assets/market.png"
import movieBox from "../Assets/movieBox.png";
const skillList = [
  {
    image: logo4,
    content: "HTML5",
  },
  {
    image: logo5,
    content: "CSS3",
  },
  {
    image: logo12,
    content: "CHAKRA UI",
  },
  {
    image: logo6,
    content: "JAVASCRIPT",
  },
  {
    image: logo11,
    content: "TYPESCRIPT",
  },
  {
    image: logo1,
    content: "REACT",
  },
  {
    image: logo3,
    content: "REDUX",
  },
  {
    image: logo10,
    content: "GIT",
  },
];

const ServiceList = [
  {
    image: frontend,
    heading: "FRONTEND DEVELOPMENT",
    content:
      "High quality development of sites with extreme attention to details at a professional level.",
  },
  {
    image: responsive,
    heading: "RESPONSIVE DESIGNS",
    content:
      "Quality and effective development of sites to render and adapt to any given device.",
  },
  {
    image: cleanCode,
    heading: "CLEAN CODE",
    content:
      "Clean code practice to maintain the main concepts and skills needed to use code and computational thinking.",
  },
  {
    image: webDesign,
    heading: "WEB DESIGN",
    content:
      "Mastermind the process of building the elements of a website, which entails the overall look and feel of the website.",
  },
  {
    image: restApi,
    heading: "RESTFUL SERVICES AND APIs",
    content:
      "Creation and consumption of RESTful (Representational State Transfer) Web services and APIs.",
  },
  {
    image: webDev,
    heading: "WEB DEVELOPMENT",
    content:
      "Meticulous development of websites that are up to standard and can render properly on any web browser.",
  },
];

const projectLists = [
  {
    title: "Tanta Innovatives Limited",
    description:
      "This project is the official website of Tanta Innovatives Limited. An IT consulting and software development company that transforms businesses with cutting edge software solutions. I was part of the Frontend team that built this website. Built with React, CSS, Chakra UI, Styled-components, RESTFUL APIs, Axios, Node.js,",
    githubRepo: "",
    liveSite: "https://tantainnovatives.com/",
    image: (
      <img
        src={tanta}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "IP Address Tracker",
    description:
      "This is an IP address tracker web app where users can input an IP address and then retrieve and display information about that IP address, such as its location on a map, the associated country, city, ISP (Internet Service Provider). Built with React js, Chakra ui and  Leafletjs",
    githubRepo: "https://github.com/Demi-la/IP-address-tracker",
    liveSite: "https://ip-address-tracker-eosin-tau.vercel.app/",
    image: (
      <img
        src={tracker}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "Notification",
    description:
      "This is a  single page web app. It allows users to view notifications, mark read and unread notification. Built with Html, Css and Javascript.",
    githubRepo: "https://github.com/Demi-la/notification",
    liveSite: " https://notification-two.vercel.app/",
    image: (
      <img
        src={notification}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "Advice Generator App",
    description:
      "This project is centered around API. I implemented data fetching from Advice Slip API. This application gives out over ten million pieces of advice, and this is generated by clicking the dice icon. Built with React js, Css and axios",
    githubRepo: "https://github.com/Demi-la/Advice-Generator",
    liveSite: "https://advice-generator-rose-eight.vercel.app/",
    image: <img src={advice_gen_app} alt="" style={{ height: "100%" }} />,
  },
  {
    title: "Pricing Component",
    description:
      "This Project is basically a single page pricing compoent  user can see different price range by sliding it to the left or right and can also get a discount by clicking on the toggle. Built with React js, css.",
    githubRepo: "https://github.com/Demi-la/Pricing-app",
    liveSite: "https://pricing-app-iota.vercel.app/",
    image: <img src={pricing} alt="" style={{ height: "100%" }} />,
  },
  {
    title: "Dog Breed",
    description:
      "This is a single web app where users can view different types of dog breeds ",
    githubRepo: "https://github.com/Demi-la/Dog-breed",
    liveSite: " https://dog-breed-pied.vercel.app/",
    image: <img src={dogs} alt="" style={{ height: "100%" }} />,
  },
  {
    title: "movieBox",
    description:
      "This is a movie web app where users can get movies. Built with React js, Chakra UI and integrated TMDB API",
    githubRepo: "https://github.com/Demi-la/MovieBox-Hng-task-two",
    liveSite: "https://movie-box-hng-task-two.vercel.app/",
    image: <img src={movieBox} alt="" style={{ height: "100%" }} />,
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [pdfFile, setPdfFile] = useState("");

  useEffect(() => {
    const file = require("../Assets/Resume.pdf");
    setPdfFile(file);
  }, []);

  return (
    <section id="Home">
      <div className={Styles.headerImage}>
        <main>
          <Navbar />
          <Header />
        </main>
      </div>
      <About handleOpen={handleOpen} />
      <div className={Styles.skillsContainer}>
        <SkillsIntro />
        <div className={Styles.SkillsFlex}>
          {skillList.map((items) => (
            <Skills image={items.image} content={items.content} />
          ))}
        </div>
      </div>
      <div className={Styles.ServicesContainer}>
        <ServicesIntro />
        <div className={Styles.ServicesFlex}>
          {ServiceList.map((items) => (
            <Services
              image={items.image}
              heading={items.heading}
              content={items.content}
            />
          ))}
        </div>
      </div>
      <div className={Styles.ProjectIntro}>
        <ProjectIntro />
        {projectLists.map((items, index) => (
          <Projects
            title={items.title}
            description={items.description}
            githubRepo={items.githubRepo}
            liveSite={items.liveSite}
            image={items.image}
            even={index % 2 === 0 ? true : false}
          />
        ))}
      </div>
      <Contact />
      <Footer />
      <Dialog
        onClose={handleClose}
        open={open}
        className={Styles.DialogContainer}
      >
        <div className={Styles.firstCon}>
          <div className={Styles.secondCon}>
            <object data={resume} className={Styles.objectData}>
              My Resume
            </object>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default Home;
