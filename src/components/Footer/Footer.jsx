import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <p>/Jime aprendiendo/</p>

      <nav>
        <ul className="nav-list">
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/Z2EgpkWWHZjdNVLSA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
