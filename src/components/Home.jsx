import { useEffect, useRef, useState } from "react";
import "../CSS/home.css";
import heart from "../assets/heart.svg";
import { useGSAP } from "@gsap/react";
import BlurText from "../BlurText/BlurText";
import arrow from "../assets/arrow.svg";
import marqueeArrow from "../assets/marqueeArrow.svg";
import laptop from "../assets/laptop.svg";
import work from "../assets/work.svg";
import kalakaar from "../assets/image.png";
import propvista from "../assets/PropVista.png";
import accLogo from "../assets/ACC_logo.svg";
import educonnect from "../assets/EduConnect.jpg";
import special from "../assets/special.svg";
import accArrow from "../assets/acc-arrow.svg";
import LogoWall from "../LogoWall/LogoWall";
import CC from "../assets/CC.jpg";
import gsap from "gsap";
import { Link } from "react-router-dom";
import ShinyText from "../ShinyText/ShinyText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiCodeCurly } from "react-icons/bi";
import { GoGitPullRequest } from "react-icons/go";
import { FaFigma } from "react-icons/fa";
import TiltedCard from "../TiltedCard/TiltedCard";
import JS from "../assets/PNG/js.png";
import express from "../assets/PNG/pngegg.png";
import github from "../assets/PNG/github.png";
import gsapLogo from "../assets/PNG/gsap.png";
import html from "../assets/PNG/html.png";
import mongo from "../assets/PNG/MongoDB.png";
import node from "../assets/PNG/node.png";
import reactLogo from "../assets/PNG/physics.png";
import tailwind from "../assets/PNG/tailwind1.png";
import bootstrap from "../assets/PNG/bootstrap.png";
import CSS from "../assets/PNG/text.png";
import { LuGithub, LuInstagram, LuLinkedin, LuMail } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heartRef = useRef(null);
  const arrowRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      heartRef.current,
      1,
      { scale: 0.6, repeat: -1 },
      { scale: 1, repeat: -1, yoyo: true, ease: "bounce.out" }
    );
  });

  const handleMouseEnter = (index) => {
    gsap.to(arrowRef.current[index], {
      rotation: 45,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(arrowRef.current[index], {
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ansh-kansara-583643188/",
    },
    { name: "Github", url: "https://github.com/a833-u" },
    { name: "Instagram", url: "https://www.instagram.com/anshkansara.8/" },
    { name: "Gmail", url: "mailto:akansara833@gmail.com" },
  ];

  // Marquee

  useEffect(() => {
    const handleScroll = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 2,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".marque img", {
          rotate: 180,
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 2,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".marque img", {
          rotate: 0,
        });
      }
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) {
        const deltaY = touch.clientY - window.innerHeight / 3; // Adjust this calculation as needed
        if (deltaY > 0) {
          handleScroll({ deltaY: 1 }); // Simulate scroll down
        } else {
          handleScroll({ deltaY: -1 }); // Simulate scroll up
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const img = card.querySelector(".card-img img");

      card.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" });
        gsap.to(cards, { opacity: 0.5, duration: 0.3, ease: "power2.out" });
        gsap.to(card, { opacity: 1, duration: 0.3, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
        gsap.to(cards, { opacity: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  const sectionRef = useRef(null);
  const specialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 0",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".pro-head .head1",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      ".pro-head .head-cont",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=0.5" // Starts slightly earlier
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    const specialTl = gsap.timeline({
      scrollTrigger: {
        trigger: specialRef.current,
        start: "top 70%",
        end: "top 0",
        markers: false,
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    specialTl.fromTo(
      ".special-head .head1",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    specialTl.fromTo(
      ".special-head .special-cont",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    return () => {
      specialTl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const arrowRefs = useRef([]);

  useEffect(() => {
    gsap.set(contentRefs.current, { height: 0, opacity: 0 });
    gsap.set(arrowRefs.current, { rotate: 0 });
  }, []);

  const toggleAccordion = (index) => {
    const isActive = activeIndex === index;

    // Close previous accordion
    gsap.to(contentRefs.current[activeIndex], {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(arrowRefs.current[activeIndex], {
      rotate: 0,
      duration: 0.3,
      ease: "none",
    });

    // Open clicked accordion if it's not already open
    if (!isActive) {
      gsap.to(contentRefs.current[index], {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(arrowRefs.current[index], {
        rotate: 180,
        duration: 0.3,
        ease: "none",
      });

      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  const items = [
    {
      image: <BiCodeCurly />,
      title: "Development",
      content:
        "Crafting seamless and interactive web experiences with optimized performance. Ensuring visually appealing, fast, and responsive interfaces that adapt flawlessly to all devices and screen sizes. 🚀",
    },
    {
      image: <GoGitPullRequest />,
      title: "Version Control",
      content:
        "Efficiently managing code versions with Git and GitHub. Ensuring seamless collaboration, streamlined workflows, and maintaining clean, structured repositories for scalable development. 💻",
    },
    {
      image: <FaFigma />,
      title: "UI/UX Design",
      content:
        "Crafting intuitive and visually engaging user experiences. Blending aesthetics with functionality to create seamless, user-centric designs that enhance interaction and accessibility. 🎨",
    },
  ];

  const logoImgs = [
    { imgUrl: JS, altText: "JavaScript Logo" },
    { imgUrl: express, altText: "Express Logo" },
    { imgUrl: github, altText: "Github Logo" },
    { imgUrl: gsapLogo, altText: "GSAP Logo" },
    { imgUrl: reactLogo, altText: "React Logo" },
    { imgUrl: tailwind, altText: "Tailwind Logo" },
    { imgUrl: html, altText: "HTML Logo" },
    { imgUrl: mongo, altText: "MongoDB Logo" },
    { imgUrl: node, altText: "Node Logo" },
    { imgUrl: bootstrap, altText: "bootstrap Logo" },
    { imgUrl: CSS, altText: "CSS Logo" },
  ];

  return (
    <div>
      <div className="home-main">
        <div className="main-up">
          <img ref={heartRef} src={heart} alt="" />
          <p>
            Hello! It&apos;s <span>Ansh</span>, pleasure to connect with you.
          </p>
        </div>
        <div className="main-down">
          <p>
            Crafting{" "}
            <span>
              <BlurText
                text="user-friendly"
                delay={150}
                animateBy="words"
                direction="top"
                className=""
              />
            </span>{" "}
            websites that enhance engagement and creativity
          </p>
        </div>
        <div className="main-desc">
          <div className="desc-line"></div>
          <div className="desc">
            Passionate web designer crafting intuitive and visually engaging
            experiences. Skilled in building responsive, user-friendly
            interfaces with modern technologies.
          </div>
        </div>
        <div className="main-btns">
          <div className="btns-social">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target={link.name === "Gmail" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {link.name}{" "}
                <span>
                  <img
                    src={arrow}
                    alt=""
                    id="arrow-img"
                    ref={(el) => {
                      if (el) arrowRef.current[index] = el;
                    }}
                  />
                </span>
              </Link>
            ))}
          </div>
          <div className="btn-known">
            <Link to="/about">
              <button className="button">Know me better</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main-marque">
        <div className="marque-move">
          <div className="marque">
            <h1>Development</h1>
            <img src={marqueeArrow} alt="" />
          </div>
          <div className="marque">
            <h1>Website</h1>
            <img src={marqueeArrow} alt="" />
          </div>
          <div className="marque">
            <h1>Communication</h1>
            <img src={marqueeArrow} alt="" />
          </div>
          <div className="marque">
            <h1>Designing</h1>
            <img src={marqueeArrow} alt="" />
          </div>
          <div className="marque">
            <h1>Development</h1>
            <img src={marqueeArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="main-about">
        <div className="about-head">
          <img src={laptop} alt="" />
          <h1>
            <ShinyText
              text="About me"
              disabled={false}
              speed={2}
              className="custom-class"
            />
          </h1>
        </div>
        <div className="about-cont">
          <p id="about-para">
            I&apos;m Ansh Kansara, a passionate Front-end developer with
            exceptional problem-solving abilities, dedicated to crafting
            impactful and innovative solutions. Proficient in designing
            user-centric applications, seamlessly blending creativity and
            technical expertise. Possesses in-depth knowledge of diverse
            technology stacks, ensuring efficient and scalable product
            development. Ready to relocate with no objections to further career
            growth and opportunities.
          </p>
        </div>
      </div>
      <div className="main-projects">
        <div className="pro-head" ref={sectionRef}>
          <h1 className="head1">
            <img src={work} alt="" />
            <ShinyText
              text="My Work"
              disabled={false}
              speed={2}
              className="custom-class"
            />
          </h1>
          <div className="head-cont">
            <h1>
              Representative <span> Projects</span>
            </h1>
            <p>
              A handpicked showcase of my skills and the outcomes accomplished.
            </p>
          </div>
        </div>
        <div className="pro-main">
          <div className="pro-cards">
            <div className="cards-l">
              <Link
                to="https://github.com/Gaurav151008/kalakaarWeb"
                target="_blank"
              >
                <div className="card c1 left">
                  <div className="card-img">
                    <img src={kalakaar} alt="" />
                  </div>
                  <div className="card-cont">
                    <h1>Kalakaar</h1>
                    <p>
                      A comprehensive platform for artists to showcase their
                      talents.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="https://github.com/a833-u/educonnectt" target="_blank">
                <div className="card c2 left-b">
                  <div className="card-img">
                    <img src={educonnect} alt="" />
                  </div>
                  <div className="card-cont">
                    <h1>EduConnect</h1>
                    <p>
                      EduConnect is a platform that bridges students and
                      educators, facilitating seamless learning and
                      collaboration.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="cards-r">
              <Link to="https://github.com/a833-u/Real-Estate" target="_blank">
                <div className="card c3 right">
                  <div className="card-img">
                    <img src={propvista} alt="" />
                  </div>
                  <div className="card-cont">
                    <h1>PropVista</h1>
                    <p>
                      A scalable real estate platform that simplifies property
                      search, listing, and management, enhancing the experience
                      for buyers, sellers, and agents.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="https://github.com/Gaurav151008/CC" target="_blank">
                <div className="card c4 right-b">
                  <div className="card-img">
                    <img src={CC} alt="" />
                  </div>
                  <div className="card-cont">
                    <h1>Campus Cravings</h1>
                    <p>
                      Campus Cravings is a campus-focused food delivery platform
                      that connects students with nearby eateries for quick and
                      convenient meals.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="pro-btn">
          <div className="btn-known">
            <Link to="/project">
              <button className="button">All Projects</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="speciality">
        <div className="special-head" ref={specialRef}>
          <h1 className="head1">
            <img src={special} alt="" />
            <ShinyText
              text="My Speciality"
              disabled={false}
              speed={2}
              className="custom-class"
            />
          </h1>
          <div className="special-cont">
            <h1>
              Technical <span> Proficiencies</span>
            </h1>
          </div>
        </div>
        <div className="special-main">
          <div className="special-1">
            <div className="special-acc">
              <div className="accordion">
                {items.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3>
                        {item.image}
                        {item.title}
                      </h3>
                      <img
                        src={accArrow}
                        alt=""
                        ref={(el) => (arrowRefs.current[index] = el)}
                        className="arrow-icon"
                      />
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="accordion-content"
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="special-text">
              <TiltedCard
                imageSrc={accLogo}
                altText="Kendrick Lamar - GNX Album Cover"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </div>
          <div className="special-wall">
            <LogoWall
              items={logoImgs}
              direction="horizontal"
              pauseOnHover={true}
              size="clamp(8rem, 1rem + 20vmin, 25rem)"
              duration="60s"
              bgColor="#0b0b0d"
              bgAccentColor="#333333"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="foot-cont">
          <h1>Let&apos;s connect with me</h1>
          <div className="foot-btn">
            <div className="btn-known">
              <Link to="https://wa.me/+916356874321" target="_blank" rel="noopener noreferrer">
                <button className="button">Whatsapp me</button>
              </Link>
            </div>
          </div>
          <ul className="mob-soc-items">
              <li><Link to="https://www.linkedin.com/in/ansh-kansara-583643188/"><LuLinkedin /></Link></li>
              <li><Link to="https://github.com/a833-u"><LuGithub /></Link></li>
              <li><Link to="https://www.instagram.com/anshkansara.8/"><LuInstagram /></Link></li>
              <li><Link to="mailto:akansara833@gmail.com"><LuMail /></Link></li>
            </ul>
        </div>
        <div className="foot-copyright">
          <p>
            &copy; 2025 | Designed by{" "}
            <Link
              to="https://github.com/a833-us"
              target="_blank" 
            >
              Ansh Kansara
            </Link>
          </p>
          <div className="foot-social">
            <ul className="soc-items">
              <li><Link to="https://www.linkedin.com/in/ansh-kansara-583643188/"><LuLinkedin /></Link></li>
              <li><Link to="https://github.com/a833-u"><LuGithub /></Link></li>
              <li><Link to="https://www.instagram.com/anshkansara.8/"><LuInstagram /></Link></li>
              <li><Link to="mailto:akansara833@gmail.com"><LuMail /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
