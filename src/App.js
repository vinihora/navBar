import "./App.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineBehance } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { React, useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("not-expand");

  const expandMenu = () => {
    if (display === "not-expand") {
      setDisplay("expand");
      return;
    }
    setDisplay("not-expand");
  };

  return (
    <section className="body">
      <section className="navbar">
        <div className="content">
          <div className="image">
            <img
              src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg"
              alt=""
            />
          </div>
          <ul className="pages">
            <li>
              <a href="/home" className="btn">
                <h3>Home</h3>
              </a>
            </li>
            <li>
              <a href="/about" className="btn">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <a href="/projects" className="btn">
                <h3>Projects</h3>
              </a>
            </li>
            <li>
              <a href="/contact" className="btn">
                <h3>Contact</h3>
              </a>
            </li>
            <li>
              <a href="/teste4" className="btn">
                <h3>Profile</h3>
              </a>
            </li>
          </ul>
          <div className="social-networks">
            <BsFacebook className="icon" />
            <BsLinkedin className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiOutlineBehance className="icon" />
          </div>
          <FiMenu className="mobile-menu" onClick={() => expandMenu()} />
        </div>
      </section>
      <section className={display} id="menu">
        <li>
          <ul>
            <a href="/home">
              <h5>Home</h5>
            </a>
          </ul>
          <ul>
            <a href="/About">
              <h5>About</h5>
            </a>
          </ul>
          <ul>
            <a href="/Projects">
              <h5>Projects</h5>
            </a>
          </ul>
          <ul>
            <a href="/Contact">
              <h5>Contact</h5>
            </a>
          </ul>
          <ul>
            <a href="/Profile">
              <h5>Profile</h5>
            </a>
          </ul>
        </li>
      </section>
    </section>
  );
};

export default App;
