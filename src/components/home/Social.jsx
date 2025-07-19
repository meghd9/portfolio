import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href=""
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter />
      </a>
      <a
        href=""
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/megh-d-7b7a28332"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
