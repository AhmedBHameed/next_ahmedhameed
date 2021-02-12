import Image from 'next/image';
import React from 'react';

import KakieeLogo from '../shared/KakieLogo';
import Typography from '../Typography/Typography';

interface OnboardingProps {
  title: string;
  className?: string;
  backgroundUrl: string;
}

const Onboarding: React.FC<OnboardingProps> = ({title, children, backgroundUrl}) => {
  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap h-full">
        <div className="w-full md:w-1/2 flex flex-col bg-primary text-primary">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <div className="flex justify-center flex-col">
              <KakieeLogo className="h-20" />
              <Typography>
                <p className="text-center text-3xl uppercase">{title}</p>
              </Typography>
            </div>
            {children}
          </div>
        </div>
        <div className="relative w-1/2 shadow-2xl hidden md:block">
          <Image src={backgroundUrl} alt="Keyboard image" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
