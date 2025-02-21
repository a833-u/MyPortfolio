import { useState, useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import "../CSS/home.css";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scrollTop ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className="topBtn old-arrow">
        <IoArrowUpOutline size={20} />
      </span>
      <span className="topBtn new-arrow">
        <IoArrowUpOutline size={20} />
      </span>
    </button>
  );
};

export default ScrollTop;
