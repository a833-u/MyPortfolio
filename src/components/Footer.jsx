import { Link } from "react-router-dom";
import { LuGithub, LuInstagram, LuLinkedin, LuMail } from "react-icons/lu";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-cont">
        <h1>Let&apos;s connect with me</h1>
        <div className="foot-btn">
          <div className="btn-known">
            <Link
              to="https://wa.me/+916356874321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Whatsapp me</button>
            </Link>
          </div>
        </div>
        <ul className="mob-soc-items">
          <li>
            <Link to="https://www.linkedin.com/in/ansh-kansara-583643188/">
              <LuLinkedin />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/a833-u">
              <LuGithub />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/anshkansara.8/">
              <LuInstagram />
            </Link>
          </li>
          <li>
            <Link to="mailto:akansara833@gmail.com">
              <LuMail />
            </Link>
          </li>
        </ul>
      </div>
      <div className="foot-copyright">
        <p>
          &copy; 2025 | Designed by{" "}
          <Link to="https://github.com/a833-us" target="_blank">
            Ansh Kansara
          </Link>
        </p>
        <div className="foot-social">
          <ul className="soc-items">
            <li>
              <Link to="https://www.linkedin.com/in/ansh-kansara-583643188/">
                <LuLinkedin />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/a833-u">
                <LuGithub />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/anshkansara.8/">
                <LuInstagram />
              </Link>
            </li>
            <li>
              <Link to="mailto:akansara833@gmail.com">
                <LuMail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
