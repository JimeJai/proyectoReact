import { Nav } from "../Nav/Nav";
import "./Header.css";
// import logo from "../../assets/hero.png";
// import logo from "../../assets/react.svg";
import logo from "../../assets/vite.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      {/* <p>aca me falta el link del logo al home</p> */}
      <div className="logo-container">
        <Link to={"/"}>
          {" "}
          <span></span>
          <img src={logo} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};
