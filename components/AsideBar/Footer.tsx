import React from 'react';

import MailIcon from '../../statics/email.svg';
import GithubIcon from '../../statics/github-sign.svg';
import HeartIcon from '../../statics/heart.svg';
import LinkedinIcon from '../../statics/linkedin-sign.svg';

const Footer = () => (
  <div className="flex flex-col flex-shrink-0">
    <div className="flex flex-col text-center content-center flex-1 p-4 mb-16 text-primary text-sm">
      <p className="mb-2">
        <span className="text-secondary">
          © 2021 kakiee.at
          <br />
          Made with
        </span>
        <HeartIcon className="inline h-5 text-red-500" />
        <span className="text-secondary">by </span>
        <span className="text-subject font-bold">Ahmed HAMEED</span>
      </p>
      <div className="flex justify-center text-secondary">
        <a className="cursor-pointer p-1" href="https://www.linkedin.com/in/ahmed-hameed-185b3612b/" target="_blank">
          <LinkedinIcon className="h-5 w-5" />
        </a>

        <a className="cursor-pointer p-1" href="https://github.com/AhmedBHameed" target="_blank">
          <GithubIcon className="h-5 w-5" />
        </a>

        <a className="cursor-pointer p-1" href="mailto:contact.kakiee@gmail.com" target="_blank">
          <MailIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
