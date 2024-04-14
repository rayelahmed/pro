import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-section">
      <ul>
        <li>
          <a href="/https://github.com/rayelahmed">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="/https://www.linkedin.com/in/rayel-ahmed/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="/https://www.instagram.com/rayelahhmed_404/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="/https://twitter.com/RayelAhmed10">
            <FaXTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
