import {Power4, TweenLite} from 'gsap';
import {NextPage} from 'next';
import {useEffect, useRef} from 'react';

import styled from '@emotion/styled';

import {useNavigateToContactMe} from '../components/AboutMe/hooks/NavigateToContactMe';
import AhmedhammedNavigation from '../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation';
import AsideBar from '../components/AsideBar/AsideBar';
import {BaseButton} from '../components/Buttons';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Typography from '../components/Typography/Typography';
import CodeSvg from '../statics/code.svg';
import ConsultingSvg from '../statics/consulting.svg';
import EmailSvg from '../statics/email.svg';
import FlourishSvg from '../statics/flourish.svg';
import AhmedSvg from '../statics/mysvg.svg';
import OptimizationSvg from '../statics/optimization.svg';
import PlanningSvg from '../statics/planning.svg';
import MetaTags from '../components/MetaTags/MetaTags';

const SvgContainer = styled.div({
  width: 300,
  opacity: 0,
});

const WhoAmIContainer = styled.div({
  fontFamily: 'Fredericka the Great',
  transform: 'translate(0, -50%)',
  opacity: 0,
});

const AboutMe: NextPage = () => {
  const mySvgRef = useRef<HTMLObjectElement | any>(null);
  const captionEl = useRef<HTMLDivElement>(null);
  const {goToContactMe} = useNavigateToContactMe();

  useEffect(() => {
    const mySvgElement = mySvgRef.current;
    if (mySvgElement) {
      TweenLite.to(mySvgElement, 3, {
        x: '15%',
        opacity: 1,
        ease: Power4.easeInOut,
      }).delay(0.2);

      TweenLite.to(captionEl.current, 3, {
        x: '-50%',
        opacity: 1,
        ease: Power4.easeInOut,
      }).delay(0.5);
    }
  }, [mySvgRef.current]);

  return (
    <AsideBar asideNavigationComponent={<AhmedhammedNavigation />}>
      <MetaTags
        articleUrl="https://www.ahmedhameed.dev"
        title="Hi my name is Ahmed HAMEED"
        imageUrl="/images/ahmedhameed.png"
        description="I'm a software engineer with experience in web development. Coding is my passion. I love training/coaching
        web technologies and dreaming about building codding school which working on slowly. Arabic food is my style
        and regarding to social status, (Searching for soulmate ...)."
        articleBy="Ahmed HAMEED"
      >
        <title>About Ahmed HAMEED</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" />
      </MetaTags>
      <div className="relative bg-secondary">
        <FlourishSvg className="text-secondary opacity-20 absolute top-2 left-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />
        <FlourishSvg className="text-secondary opacity-20 transform rotate-180 absolute bottom-2 right-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />
        <SvgContainer ref={mySvgRef} className="invisible md:visible lg:ml-20 xl:ml-48 2xl:ml-80 pt-16 px-7">
          <AhmedSvg />
        </SvgContainer>

        <WhoAmIContainer ref={captionEl} className="text-primary absolute md:ml-20 lg:ml-16 top-1/2 left-1/2">
          <h4 className="text-2xl sm:text-2xl md:text-3xl text-center">Hi, my name is</h4>
          <h3 className="text-4xl sm:text-5xl md:text-5xl text-center whitespace-nowrap">Ahmed HAMEED</h3>
        </WhoAmIContainer>
      </div>

      <div className="p-8 w-full">
        <Typography className="mb-16">
          <h6 className="uppercase font-bold">Who am I 🤔</h6>
          <p className="md:text-lg text-secondary">
            I'm a software engineer with experience in web development. Coding is my passion. I love training/coaching
            web technologies and dreaming about building codding school which working on slowly. Arabic food is my style
            and regarding to social status, (Searching for soulmate ...).
          </p>
        </Typography>

        <div className="mb-16 flex flex-wrap">
          <ServiceCard
            title="IMPLEMENTATION ⚒️"
            paragraph="Converting your design into a web page. Coding is our duty by using the most modern technologies."
            Icon={CodeSvg}
            className="w-full md:w-1/2"
          />

          <ServiceCard
            title="PLANNING 🔭"
            paragraph="All projects require in-depth preparation before coding can begin. By utilizing my skill set, we can make your project idea become a reality."
            Icon={PlanningSvg}
            className="w-full md:w-1/2"
          />

          <ServiceCard
            title="OPTIMIZATION ⚖️"
            paragraph="Optimization requires a deep understanding of use. With my experience, I can confidently lead you into a faster and more reliable performance."
            Icon={OptimizationSvg}
            className="w-full md:w-1/2"
          />

          <ServiceCard
            title="CONSULTING AND TRAINING 👩‍💻"
            paragraph="With more than 5 years of experience, consulting and training are some of my services which focus on web technologies."
            Icon={ConsultingSvg}
            className="w-full md:w-1/2"
          />
        </div>

        <div className="mb-16">
          <Typography className="mb-16">
            <h6 className="uppercase font-bold">Contact me ⌨️</h6>
          </Typography>

          <BaseButton
            Icon={EmailSvg}
            iconClasses="text-reverse"
            className="uppercase w-full bg-subject text-reverse justify-center"
            onClick={goToContactMe}
          >
            Contact Me
          </BaseButton>
        </div>
      </div>
    </AsideBar>
  );
};

export default AboutMe;
