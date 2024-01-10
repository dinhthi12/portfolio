import React from "react";
import "./footer.css";
const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">ネルソン・マンデラ</h1>

        <ul className="footer__list">
          <li>
            <a href="" className="footer__link">
              Facebook
            </a>
          </li>
          <li>
            <a href="" className="footer__link">
              Github
            </a>
          </li>
          <li>
            {" "}
            <a href="" className="footer__link">
              Instagram
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/nguyen-dinh-thi-819471214/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/dinhthi12"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCK9nL1AikfpMvRTwed0NDxQ"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-youtube"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; 変革せよ。変革を迫られる前に。
        </span>
      </div>
    </footer>
  );
};

export default Footer;
