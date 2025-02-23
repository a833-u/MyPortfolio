import "../CSS/about.css";
import ScrollTop from "./ScrollTop";
import aboutImg from "../assets/aboutMyImage.jpg";
import BlurText from "../BlurText/BlurText";
import { Link } from "react-router-dom";
import CircularText from "../CircularText/CircularText";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
            & Design Specialist
          </h1>
          <div className="desc-para">
            <p>
              I collaborate with leading companies to craft dynamic,
              user-centric web experiences that showcase my skills and open
              doors to exciting career opportunities.{" "}
            </p>
          </div>
          <div className="btn-known">
            <Link to="/public/PDF/My-CV.pdf"  target="_blank" rel="noopener noreferrer">
              <button className="button">Resume</button>
            </Link>
          </div>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default About;
