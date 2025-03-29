import "../CSS/about.css";
import ScrollTop from "./ScrollTop";
import aboutImg from "../assets/aboutMyImage.jpg";
import BlurText from "../BlurText/BlurText";
import { Link } from "react-router-dom";
import CircularText from "../CircularText/CircularText";
import { GoArrowUpRight, GoTools } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import { BsFillGearFill, BsStars } from "react-icons/bs";
import ShinyText from "../ShinyText/ShinyText";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { CiAlignLeft, CiBezier, CiEdit } from "react-icons/ci";
import { PiRocketThin, PiTestTubeThin } from "react-icons/pi";

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
          x: "-100%",
          scrollTrigger: {
            trigger: ".workProcess", // Ensure this element exists
            scroller: "body",
            start: "top 0%",
            end: "top -300%",
            scrub: 2,
            pin: true,
            invalidateOnRefresh: true,
            onEnter: () => console.log("ScrollTrigger entered"), // Debugging
            onLeave: () => console.log("ScrollTrigger left"),   // Debugging
            onEnterBack: () => console.log("ScrollTrigger entered back"),
            onLeaveBack: () => console.log("ScrollTrigger left back")
          },
          onComplete: () => console.log("GSAP animation complete"), //Debugging
          onError: (error) => console.error("GSAP animation error:", error)  // Error logging
        });
      } catch (error) {
        console.error("ScrollTrigger initialization error:", error);
        // Fallback behavior:  Maybe show a message or use a different animation
        // You could also set a state variable to disable the animation altogether.
        alert("Error initializing animation. Please reload the page."); //Notify user
      }
    } else {
      // If it's mobile or cards.current is null, revert to default state
      if (cards.current) {
        gsap.set(cards.current, { clearProps: "x" });
      }
    }

    //Important:  Refresh ScrollTrigger after content loads.  This is the most common cause of issues.
    ScrollTrigger.refresh();

  }, [isMobile]);


  const cardData = [
    {
      title: "Learn & Plan",
      description:
        "Understand project requirements and sketch a rough layout. Use Figma or pen & paper to create simple wireframes.",
      icon: <CiBezier color="var(--text-secondary)" size={25} />
    },
    {
      title: "Design",
      description:
        "Create high-fidelity designs using Figma or Sketch, ensuring a visually appealing UI/UX.",
      icon: <CiEdit color="var(--text-secondary)" size={25} />
    },
    {
      title: "Development",
      description:
        "Convert the designs into responsive web pages using React, Tailwind, and GSAP animations.",
      icon: <CiAlignLeft color="var(--text-secondary)" size={25} />

    },
    {
      title: "Testing",
      description:
        "Perform unit testing, integration testing, and responsive testing to ensure the app works perfectly.",
      icon: <PiTestTubeThin color="var(--text-secondary)" size={25} />
    },
    {
      title: "Deployment",
      description:
        "Deploy the project using Vercel, Netlify, or a dedicated server and monitor performance.",
      icon: <PiRocketThin color="var(--text-secondary)" size={25} />
    },
    {
      title: "Maintenance",
      description:
        "Continuously update and maintain the app to fix bugs and enhance performance.",
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
              to="https://drive.google.com/file/d/13rhllYb3voGTYmvxZEnsWQz8pHAy3lsr/view?usp=drive_link"
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
      <ScrollTop />
    </div>
  );
};

export default About;
