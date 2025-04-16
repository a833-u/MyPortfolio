import "../CSS/about.css";
import ScrollTop from "./ScrollTop";
import aboutImg from "../assets/aboutMyImage.jpg";
// import aboutImg2 from "../assets/aboutImg2.png";
import BlurText from "../BlurText/BlurText";
import { Link } from "react-router-dom";
import CircularText from "../CircularText/CircularText";
import { GoArrowUpRight, GoTools } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import { BsFillGearFill, BsStars } from "react-icons/bs";
import ShinyText from "../ShinyText/ShinyText";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import ScrollFloat from "../ScrollFloat/ScrollFloat"
// import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/all";
import { CiAlignLeft, CiBezier, CiEdit } from "react-icons/ci";
import { PiRocketThin, PiTestTubeThin } from "react-icons/pi";
import { FaToolbox } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const arrowContainerRef = useRef(null);

  useEffect(() => {
    const element = arrowContainerRef.current;
    if (!element) return;

    const hoverAnimation = gsap.to(element, {
      rotate: 45,
      duration: 0.3,
      ease: "power1.out",
      paused: true,
    });

    const onMouseEnter = () => hoverAnimation.play();
    const onMouseLeave = () => hoverAnimation.reverse();

    element.addEventListener("mouseenter", onMouseEnter);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", onMouseEnter);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // const cards = useRef();
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useGSAP(() => {
  //   if (!isMobile) {
  //     gsap.to(cards.current, {
  //       x: "-100%",
  //       scrollTrigger: {
  //         trigger: ".workProcess",
  //         scroller: "body",
  //         start: "top 0%",
  //         end: "top -300%",
  //         scrub: 2,
  //         pin: true,
  //       },
  //     });
  //   }
  // }, [isMobile]);

  const cards = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);  // Use matchMedia on initial load

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);


  useEffect(() => {
    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (cards.current && !isMobile) {
      try {
        gsap.to(cards.current, {
          x: "-110%",
          scrollTrigger: {
            trigger: ".workProcess",
            scroller: "body",
            start: "top 0%",
            end: "top -300%",
            scrub: 2,
            pin: true,
            invalidateOnRefresh: true,
          },
          onComplete: () => console.log("GSAP animation complete")
        });
      } catch (error) {
        console.error("ScrollTrigger initialization error:", error);
        alert("Error initializing animation. Please reload the page.");
      }
    } else {
      if (cards.current) {
        gsap.set(cards.current, { clearProps: "x" });
      }
    }
    ScrollTrigger.refresh();

  }, [isMobile]);


  const cardData = [
    {
      title: "Requirement Analysis",
      description:
        "Gather project details, understand client needs, and define the tech stack for the frontend.",
      icon: <CiBezier color="var(--text-secondary)" size={25} />
    },
    {
      title: "Wireframing & UI Design",
      description:
        "Create wireframes and design high-fidelity mockups using Figma or Sketch, ensuring a seamless UI/UX.",
      icon: <CiEdit color="var(--text-secondary)" size={25} />
    },
    {
      title: "Development",
      description:
        "Convert the designs into responsive web pages using React, Tailwind, and GSAP animations.",
      icon: <CiAlignLeft color="var(--text-secondary)" size={25} />

    },
    {
      title: "API Integration",
      description:
        "Implement state management using React Context, Redux, or Zustand, and integrate APIs for dynamic functionality.",
      icon: <PiTestTubeThin color="var(--text-secondary)" size={25} />
    },
    {
      title: "Testing & Debugging",
      description:
        "Perform unit and integration testing using Jest and React Testing Library to ensure a bug-free experience.",
      icon: <PiRocketThin color="var(--text-secondary)" size={25} />
    },
    {
      title: "Optimization",
      description:
        "Optimize performance using lazy loading, code splitting, and accessibility improvements.",
      icon: <GoTools color="var(--text-secondary)" size={25} />
    },
  ];

  return (
    <div>
      <div className="about-hero">
        <div className="hero-img">
          <img src={aboutImg} alt="" />
          <div className="circularFont">
            <CircularText
              text="LETS TALK ● LETS TALK ● "
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />

            <div className="circularArrow" ref={arrowContainerRef}>
              <Link to="/contact">
                <div className="">
                  <GoArrowUpRight color="#b5ff6d" size={25} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-desc">
          <h1>
            A{" "}
            <span>
              <BlurText
                text="Passionate Web Developer"
                delay={150}
                animateBy="words"
                direction="top"
                className=""
              />
            </span>{" "}
            & Design Specialist{" "}
            <div className="glowing-star">
              <BsStars color="gold" size={35} />
            </div>
          </h1>
          <div className="desc-para">
            <p>
              I collaborate with leading companies to craft dynamic,
              user-centric web experiences that showcase my skills and open
              doors to exciting career opportunities.{" "}
            </p>
          </div>
          <div className="btn-known">
            <Link
              to="https://drive.google.com/file/d/1nN7DiJuELmetLzirFg9C2keaXOQA4nww/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Resume</button>
            </Link>
          </div>
        </div>
      </div>
      <ScrollVelocity
        texts={["Front - end Developer ", "Web Designer "]}
        velocity={40}
        className="custom-scroll-text"
      />
      <div className="workProcess">
        <div className="process-head">
          <h1 className="head1">
            <BsFillGearFill color="var(--text-primary)" />
            <ShinyText
              text="STEPS I FOLLOW"
              disabled={false}
              speed={2}
              className="custom-class"
            />
          </h1>
          <div className="head-cont">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              My Methodology
            </ScrollFloat>
          </div>
        </div>
        <div className="process-cards">
          <div ref={cards} className={`main-cards ${isMobile ? "grid-layout" : ""}`}>
            {cardData.map((card, index) => (
              <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="var(--text-primary)">
                <div className="card-logo">
                  {card.icon}
                </div>
                <div className="card-heading">
                  <h1>{card.title}</h1>
                </div>
                <div className="card-detail">
                  <p>{card.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
      <div className="techStack">
        <div className="techHeader">
          <h1 className="head1">
            <FaToolbox />
            <ShinyText
              text="Tools I know"
              disabled={false}
              speed={2}
              className="custom-class"
            />
          </h1>
          <div className="head-cont">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Tech Familiarity
            </ScrollFloat>
          </div>
        </div>
        <div className="techMain">
          <div className="techCardCont">
            <div className="techCard">
              <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="#58c4dc" xmlns="http://www.w3.org/2000/svg" className="uwu-hidden img"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
              <div className="textBox">
                <p className="head">React</p>
                <p className="discription">The library for web and native user interfaces</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" className="img tailwind" id="Tailwindcss-Icon--Streamline-Svg-Logos" height="80%" width="80%"><desc>Tailwindcss Icon Streamline Icon: https://streamlinehq.com</desc><path fill="url(#a)" d="M48 19.7998c-12.5333 0-20.3667 6.2667-23.5 18.8 4.7-6.2667 10.1833-8.6167 16.45-7.05 3.5755.8939 6.1311 3.4878 8.9598 6.3591 4.6081 4.6774 9.9413 10.0909 21.5902 10.0909 12.5333 0 20.3667-6.2667 23.5-18.8-4.7 6.2667-10.1833 8.6167-16.45 7.05-3.5755-.8939-6.1311-3.4877-8.9598-6.3591C64.9821 25.2133 59.6489 19.7998 48 19.7998Zm-23.5 28.2c-12.5333 0-20.36667 6.2667-23.5 18.8 4.7-6.2667 10.1833-8.6167 16.45-7.05 3.5755.8939 6.1311 3.4878 8.9598 6.3591C31.0179 70.7863 36.3511 76.1998 48 76.1998c12.5333 0 20.3667-6.2667 23.5-18.8-4.7 6.2667-10.1833 8.6167-16.45 7.05-3.5755-.8939-6.1311-3.4877-8.9598-6.3591-4.6081-4.6774-9.9413-10.0909-21.5902-10.0909Z"></path><defs><linearGradient id="a" x1="-260.111" x2="7858.33" y1="1824.6" y2="6505.5" gradientUnits="userSpaceOnUse"><stop stopColor="#2298bd"></stop><stop offset="1" stopColor="#0ed7b5"></stop></linearGradient></defs></svg>
              <div className="textBox">
                <p className="head">Tailwind</p>
                <p className="discription">Utility-first CSS framework for fast and custom UI design.</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="img"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" /></svg>
              <div className="textBox">
                <p className="head">Node.js</p>
                <p className="discription">Node.js is a free, open-source, cross-platform JavaScript runtime environment</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="257" viewBox="0 0 120 257" fill="none" className="img">
                <path d="M82.3229 28.5501C71.5367 15.7947 62.2485 2.84006 60.351 0.149477C60.1512 -0.0498257 59.8515 -0.0498257 59.6518 0.149477C57.7542 2.84006 48.4661 15.7947 37.6798 28.5501C-54.9019 146.238 52.2613 225.661 52.2613 225.661L53.1601 226.258C53.959 238.516 55.9565 256.154 55.9565 256.154H59.9514H63.9463C63.9463 256.154 65.9438 238.615 66.7428 226.258L67.6416 225.561C67.7414 225.561 174.905 146.238 82.3229 28.5501ZM59.9514 223.867C59.9514 223.867 55.1576 219.781 53.8592 217.688V217.489L59.6518 89.3375C59.6518 88.9389 60.2511 88.9389 60.2511 89.3375L66.0436 217.489V217.688C64.7453 219.781 59.9514 223.867 59.9514 223.867Z" fill="#00ED64" />
              </svg>
              <div className="textBox">
                <p className="head">MongoDB</p>
                <p className="discription">NoSQL database for scalable and flexible data storage.</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg xmlns="http://www.w3.org/2000/svg" className="img" viewBox="0 0 128 128"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" /></svg>
              <div className="textBox">
                <p className="head">Express.js</p>
                <p className="discription">Express is a minimal and flexible Node.js web application framework.</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg" id="Github-Fill--Streamline-Remix-Fill" height="100%" width="100%" className="img"><desc>Github Fill Streamline Icon: https://streamlinehq.com</desc><path d="M8.000666666666666 1.3333333333333333C4.31732 1.3333333333333333 1.3339866666666667 4.316666666666666 1.3339866666666667 8c0 2.9499999999999997 1.9083333333333332 5.441666666666666 4.558333333333334 6.325 0.3333333333333333 0.05833333333333333 0.4583333333333333 -0.14166666666666666 0.4583333333333333 -0.31666666666666665 0 -0.15833333333333333 -0.008333333333333333 -0.6833333333333332 -0.008333333333333333 -1.2416666666666667 -1.675 0.30833333333333335 -2.1083333333333334 -0.4083333333333333 -2.2416666666666663 -0.7833333333333333 -0.075 -0.19166666666666665 -0.39999999999999997 -0.7833333333333333 -0.6833333333333332 -0.9416666666666667 -0.2333333333333333 -0.125 -0.5666666666666667 -0.43333333333333335 -0.008333333333333333 -0.44166666666666665 0.5249999999999999 -0.008333333333333333 0.9 0.4833333333333333 1.025 0.6833333333333332 0.6 1.0083333333333333 1.5583333333333331 0.7249999999999999 1.9416666666666667 0.5499999999999999 0.05833333333333333 -0.43333333333333335 0.2333333333333333 -0.7249999999999999 0.4250133333333333 -0.8916666666666666 -1.4833466666666668 -0.16666666666666666 -3.0333466666666666 -0.7416666666666667 -3.0333466666666666 -3.2916666666666665 0 -0.7249999999999999 0.2583333333333333 -1.325 0.6833333333333332 -1.7916666666666665 -0.06666666666666667 -0.16666666666666666 -0.3 -0.8499999999999999 0.06666666666666667 -1.7666666666666666 0 0 0.5583333333333333 -0.175 1.8333333333333333 0.6833333333333332 0.5333466666666666 -0.15 1.1000133333333333 -0.225 1.66668 -0.225 0.5666666666666667 0 1.1333333333333333 0.075 1.6666666666666665 0.225 1.275 -0.8666666666666667 1.8333333333333333 -0.6833333333333332 1.8333333333333333 -0.6833333333333332 0.3666666666666667 0.9166666666666666 0.13333333333333333 1.5999999999999999 0.06666666666666667 1.7666666666666666 0.42499999999999993 0.4666666666666666 0.6833333333333332 1.0583333333333331 0.6833333333333332 1.7916666666666665 0 2.558333333333333 -1.5583333333333331 3.125 -3.0416666666666665 3.2916666666666665 0.24166666666666664 0.20833333333333331 0.45 0.6083333333333333 0.45 1.2333333333333334 0 0.8916666666666666 -0.008333333333333333 1.6083333333333334 -0.008333333333333333 1.8333333333333333 0 0.175 0.125 0.3833333333333333 0.4583333333333333 0.31666666666666665C12.839333333333332 13.408866666666665 14.666599999999999 10.864199999999999 14.667333333333334 8c0 -3.6833333333333336 -2.983333333333333 -6.666666666666666 -6.666666666666666 -6.666666666666666Z" strokeWidth="0.6667"></path></svg>
              <div className="textBox">
                <p className="head">Github</p>
                <p className="discription">Platform for hosting, version control, and collaboration using Git.</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg xmlns="http://www.w3.org/2000/svg" className="img" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" /><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" /><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" /><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" /></svg>
              <div className="textBox">
                <p className="head">HTML</p>
                <p className="discription">Markup language for structuring web content.</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg xmlns="http://www.w3.org/2000/svg" className="img" fill="none" height="100%" width="100%" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" /><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" /><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff" /></svg>
              <div className="textBox">
                <p className="head">CSS</p>
                <p className="discription">Stylesheet language for designing web layouts and visuals.</p>
              </div>
            </div>
          </div>
          <div className="techCardCont">
            <div className="techCard">
              <svg viewBox="0 0 16 16" className="img" fill="#f0db4f" xmlns="http://www.w3.org/2000/svg" id="Javascript-Fill--Streamline-Remix-Fill" height="100%" width="100%"><desc>Javascript Fill Streamline Icon: https://streamlinehq.com</desc><path d="M4 2C2.895433333333333 2 2 2.895433333333333 2 4v8c0 1.1046 0.8954333333333333 2 2 2h8c1.1046 0 2 -0.8954 2 -2V4c0 -1.1045666666666665 -0.8954 -2 -2 -2H4Zm4.8896 8.703333333333333c0.4791333333333333 0.3862 0.9581999999999999 0.5768666666666666 1.4373333333333334 0.572 0.29333333333333333 0 0.5182 -0.053799999999999994 0.6746666666666666 -0.16133333333333333 0.15153333333333333 -0.10266666666666666 0.22733333333333333 -0.24933333333333332 0.22733333333333333 -0.44 0 -0.19553333333333334 -0.07579999999999999 -0.36179999999999995 -0.22733333333333333 -0.49866666666666665 -0.15646666666666664 -0.13686666666666666 -0.4522 -0.2738 -0.8873333333333333 -0.4106666666666666 -0.5231333333333332 -0.15153333333333333 -0.9264666666666665 -0.34713333333333335 -1.21 -0.5866666666666667 -0.2786666666666666 -0.23953333333333332 -0.42046666666666666 -0.5744666666666667 -0.42533333333333334 -1.0046666666666666 0 -0.4058 0.176 -0.7455333333333334 0.528 -1.0193333333333332 0.34219999999999995 -0.2738 0.7797999999999999 -0.4106666666666666 1.3126666666666666 -0.4106666666666666 0.7431333333333333 0 1.3395333333333332 0.18086666666666665 1.7893333333333334 0.5426666666666666l-0.5133333333333333 0.7993333333333333c-0.18086666666666665 -0.14179999999999998 -0.3886666666666666 -0.24446666666666667 -0.6233333333333333 -0.308 -0.23466666666666663 -0.07333333333333333 -0.44486666666666663 -0.11 -0.6306666666666666 -0.11 -0.2542 0 -0.4571333333333333 0.04646666666666666 -0.6086666666666667 0.1393333333333333 -0.15153333333333333 0.09286666666666667 -0.22733333333333333 0.21513333333333332 -0.22733333333333333 0.3666666666666667 0 0.1662 0.09286666666666667 0.308 0.2786666666666666 0.42533333333333334 0.1858 0.11246666666666666 0.5035333333333333 0.23713333333333333 0.9533333333333333 0.374 0.5426666666666666 0.16133333333333333 0.9288666666666666 0.3764666666666666 1.1586666666666665 0.6453333333333333s0.3446666666666667 0.6111333333333333 0.3446666666666667 1.0266666666666666c0 0.42533333333333334 -0.1638 0.7919999999999999 -0.4913333333333333 1.0999999999999999 -0.32266666666666666 0.3031333333333333 -0.7919999999999999 0.46199999999999997 -1.408 0.4766666666666666 -0.8066666666666666 0 -1.4813333333333332 -0.242 -2.024 -0.726l0.572 -0.7919999999999999Zm-3.6869 0.42533333333333334c0.15644666666666665 0.0978 0.3446666666666667 0.14666666666666667 0.5646666666666667 0.14666666666666667 0.22977999999999998 0 0.42044666666666664 -0.066 0.572 -0.19799999999999998 0.15155999999999997 -0.13686666666666666 0.22733333333333333 -0.374 0.22733333333333333 -0.7113333333333333v-3.5346666666666664h0.9900333333333333v3.7253333333333334c-0.014666666666666665 0.5768666666666666 -0.1809333333333333 0.9924666666666666 -0.49866666666666665 1.2466666666666666 -0.1809333333333333 0.15153333333333333 -0.37893333333333334 0.2591333333333333 -0.5940333333333333 0.32266666666666666 -0.21510666666666667 0.06353333333333333 -0.42288666666666663 0.09533333333333333 -0.6233333333333333 0.09533333333333333 -0.3666666666666667 0 -0.6917733333333334 -0.06353333333333333 -0.9753333333333334 -0.19066666666666665 -0.30310666666666664 -0.13686666666666666 -0.5573333333333332 -0.3788666666666667 -0.7626666666666666 -0.726l0.6893333333333334 -0.5646666666666667c0.12711333333333333 0.1711333333333333 0.264 0.30066666666666664 0.4106666666666666 0.3886666666666666Z" strokeWidth="0.6667"></path></svg>
              <div className="textBox">
                <p className="head">JavaScript</p>
                <p className="discription">Programming language for interactive web functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default About;
