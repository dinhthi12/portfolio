import React from "react";

const Social = () => {
  return (
    <div className="home__social">
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
  );
};

export default Social;
