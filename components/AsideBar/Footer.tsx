import React from 'react';

import {useTranslation} from '../shared/hooks/translationHook';
import {EmailSvg, GithubSvg, HeartSvg, LinkedinSvg} from '../SVGs';

const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col flex-shrink-0">
      <div className="flex flex-col text-center content-center flex-1 p-4 mb-16 text-primary text-sm">
        <p className="mb-2">
          <span className="text-secondary">
            © 2021 kakiee.at
            <br />
            Made with
          </span>
          <HeartSvg className="inline h-5 text-red-500" />
          <span className="text-secondary">by </span>
          <span className="text-subject font-bold">
            {t('asideBar.ahmedHameed')}
          </span>
        </p>
        <div className="flex justify-center text-secondary">
          <a
            className="cursor-pointer p-1"
            href="https://www.linkedin.com/in/ahmed-hameed-185b3612b/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinSvg className="h-5 w-5" />
          </a>

          <a
            className="cursor-pointer p-1"
            href="https://github.com/AhmedBHameed"
            rel="noreferrer"
            target="_blank"
          >
            <GithubSvg className="h-5 w-5" />
          </a>

          <a
            className="cursor-pointer p-1"
            href="mailto:contact.kakiee@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <EmailSvg className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
