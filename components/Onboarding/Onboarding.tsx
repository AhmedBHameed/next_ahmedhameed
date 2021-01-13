import React from 'react';
import KakieeLogo from '../shared/KakieLogo';

interface OnboardingProps {
  className?: string;
}

const Onboarding: React.FC<OnboardingProps> = ({children}) => {
  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap h-full">
        <div className="w-full md:w-1/2 flex flex-col bg-primary text-primary">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <div className="flex justify-center flex-col">
              <KakieeLogo className="h-20" />
              <p className="text-center text-3xl uppercase">welcome</p>
            </div>
            {children}
          </div>
        </div>
        <div className="w-1/2 shadow-2xl hidden md:block">
          <img className="object-cover w-full h-screen" src="https://source.unsplash.com/IXUM4cJynP0" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
