import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import github from "../assets/github.svg";
import "../CSS/index.css";
import { Link, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import home from "../assets/home.svg";
import about from "../assets/about.svg";
import project from "../assets/project.svg";
import contact from "../assets/contact.svg";

// import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const spanRef = useRef(null);
  const imgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-nav", {
      y: -100,
      duration: 1.8,
      opacity: 0,
      delay: 0.2,
      ease: "elastic.inOut(1,0.3)",
      stagger: 0.1,
      padding: 0,
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        if (window.innerWidth <= 768) {
          // Apply specific styles for screens <= 768px
          gsap.to(navbar, {
            width: "100%", // Keep it full width
            opacity: 1, // Change opacity if desired
            duration: 0.8,
            backgroundColor: "var(--color-dark-bg)",
            borderRadius: "50px",
            paddingLeft: "3vw",
            paddingRight: "3vw",
          });
        } else {
          gsap.to(navbar, {
            width: "50%",
            opacity: 1,
            duration: 0.8,
            paddingLeft: "2vw",
            paddingRight: "2vw",
            backgroundColor: "#0b0b0da6",
            borderRadius: "50px",
            zIndex: 1000,
            backdropFilter: "blur(10px)",
            border: "0.7px solid #C0C0C033",
          });
        }
      } else {
        gsap.to(navbar, {
          width: window.innerWidth <= 768 ? "100%" : "100%",
          opacity: 1,
          duration: 0.8,
          backgroundColor: "var(--color-dark-bg)",
          borderRadius: 0,
          padding: 0,
          border: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    const mouseEnter = () => {
      gsap.from(img, {
        x: -2,
        rotation: -2,
        duration: 0.05,
        yoyo: true,
        repeat: 5,
      });
    };
    const mouseLeave = () => {
      gsap.to(img, { x: 0, rotation: 0, duration: 0.2 });
    };

    img.addEventListener("mouseenter", mouseEnter);
    img.addEventListener("mouseleave", mouseLeave);

    return () => {
      img.removeEventListener("mouseenter", mouseEnter);
      img.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);


  return (
    <header className="nav-header">
      <nav ref={spanRef} className="nav-nav" id="navbar">
        <div
          className="nav-logo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/">
            A{" "}
            <span
              className="nav-logo-k"
              style={{
                transform: isHovered ? "rotate(-25deg)" : "rotate(0deg)",
              }}
            >
              K
            </span>
          </Link>
        </div>
        <ul className="nav-items">
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === "/about" ? "active" : ""}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className={activeLink === "/project" ? "active" : ""}
              onClick={() => handleLinkClick("/project")}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-mode">
          <a href="https://github.com/a833-u" target="_blank">
            <img ref={imgRef} src={github} alt="light-mode" id="git" />
          </a>
        </div>
      </nav>
      <nav className="mob-nav">
        <div className="mob-items">
          <ul className="items">
            <Link to="/">
              <li>
                <img src={home} alt="" />
                Home
              </li>
            </Link>
            <Link to="/about">
              <li>
                <img src={about} alt="" />
                About
              </li>
            </Link>
            <Link to="/project">
              <li>
                <img src={project} alt="" />
                Project
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <img src={contact} alt="" />
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
