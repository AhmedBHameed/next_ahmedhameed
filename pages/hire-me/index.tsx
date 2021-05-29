import styled from '@emotion/styled';
import {Power4, TweenLite} from 'gsap';
import {NextPage} from 'next';
import Head from 'next/head';
import React, {useEffect, useRef} from 'react';

import useNavigateToContactMe from '../../components/AboutMe/hooks/navigateToContactMe';
import AhmedhammedNavigation from '../../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation';
import AsideBar from '../../components/AsideBar/AsideBar';
import {BaseButton} from '../../components/Buttons';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import {useTranslation} from '../../components/shared/hooks/translationHook';
import {
  ApiSvg,
  DockerSvg,
  ProjectStructureSvg,
  QuoteSvg,
} from '../../components/SVGs';
import Typography from '../../components/Typography/Typography';
import mq from '../../styles/breakpoints';

const MainTitle = styled.h4({
  fontFamily: 'Fredericka the Great',
  transform: 'translate(-20%, 0)',
});

const ProjectStructure = styled(ProjectStructureSvg)({
  width: '25rem',
  transform: 'translate(20%, 0)',
  "path[class='cloud']": {
    fill: 'var(--color-bg-aside)',
  },
  [mq.md]: {
    width: '45rem',
  },
  [mq.lg]: {
    width: '65rem',
  },
});

const HireMe: NextPage = () => {
  const {t} = useTranslation();
  const {goToContactMe} = useNavigateToContactMe();

  const projectSvg = useRef<HTMLObjectElement | any>(null);
  const captionEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectStructureElement = projectSvg.current;
    const textContainerElement = captionEl.current;

    if (textContainerElement && projectStructureElement) {
      TweenLite.to(projectStructureElement, 3, {
        x: '-20%',
        opacity: 1,
        ease: Power4.easeInOut,
      }).delay(0.2);

      TweenLite.to(textContainerElement, 3, {
        x: '0%',
        opacity: 1,
        ease: Power4.easeInOut,
      }).delay(0.5);
    }
  }, []);

  return (
    <AsideBar asideNavigationComponent={<AhmedhammedNavigation />}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="p-8 lg:px-52 bg-secondary relative flex flex-col justify-center items-center">
        <MainTitle
          className="text-primary text-center text-2xl md:text-4xl mb-10 opacity-0"
          ref={captionEl}
        >
          {t('hireMe.headerSection.title')}
        </MainTitle>

        <div className="text-primary opacity-0" ref={projectSvg}>
          <ProjectStructure className="w-96" />
        </div>
      </div>

      <div className="p-8 w-full">
        <Typography className="mb-16">
          <h6 className="uppercase font-bold">
            What do I offer as a service? 🤔
          </h6>
        </Typography>

        <div className="mb-16 flex flex-wrap">
          <ServiceCard
            className="w-full md:w-1/2"
            Icon={ApiSvg}
            paragraph="I build scalable back-end applications to service multiple clients by using modern technologies such as back-end framework like Node.js and databases such as SQL / NoSQL with the best concepts from JWT / RESTfull API / GraphQL / Microservices."
            title="BACK-END 🕸️"
          />

          <ServiceCard
            className="w-full md:w-1/2"
            Icon={ApiSvg}
            paragraph="Coding UX/UI is my responsibility. Client experience comes first when developing interfaces and services. Clean, reusable, and optimized code is my focus. I use the most modern framework such as React.js / Angular.js / Vue.js."
            title="FRONT-END 🖼️"
          />

          <ServiceCard
            className="w-full md:w-1/2"
            Icon={DockerSvg}
            paragraph="I’ll help you host your website/web application and set up projects into containers to serve as a service by using Linux / Nginx / Docker / Docker-compose. This will give you more flexibility for feature modification and scalability."
            title="DEV-OPS ⚙️"
          />
        </div>

        <div className="w-full">
          <Typography className="mb-16">
            <h6 className="uppercase font-bold">Why hiring me ? 🤔</h6>
          </Typography>

          <ServiceCard
            className="w-full"
            Icon={QuoteSvg}
            title="From the wise words of Steve Jobs, “IT DOESN'T MAKE SENSE TO HIRE SMART PEOPLE AND TELL THEM WHAT TO DO; WE HIRE SMART PEOPLE SO THEY CAN TELL US WHAT TO DO.”"
          />

          <BaseButton
            className="uppercase bg-subject text-reverse w-full justify-center"
            onClick={goToContactMe}
          >
            Hire me
          </BaseButton>
        </div>
      </div>
    </AsideBar>
  );
};

export default HireMe;
