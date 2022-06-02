import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
