import {Power4, TweenLite} from 'gsap';
import React, {useEffect, useRef} from 'react';

import styled from '@emotion/styled';

import {useNavigateToContactMe} from '../../../components/AboutMe/hooks/NavigateToContactMe';
import {BaseButton} from '../../../components/Buttons';
import {useTranslation} from '../../../components/shared/hooks/useTranslate';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import Typography from '../../../components/Typography/Typography';
import ApiSvg from '../../../statics/api.svg';
import DockerSvg from '../../../statics/docker.svg';
import StructureSvg from '../../../statics/project_structure.svg';
import QuoteSvg from '../../../statics/quote.svg';
import mq from '../../../styles/breakpoints';
import {NextPage} from 'next';
import Head from 'next/head';
import AhmedhammedNavigation from '../../../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation';
import AsideBar from '../../../components/AsideBar/AsideBar';

const MainTitle = styled.h4({
  fontFamily: 'Fredericka the Great',
  transform: 'translate(-20%, 0)',
});

const ProjectStructureSvg = styled(StructureSvg)({
  width: '25rem',
  transform: 'translate(20%, 0)',
  "path[class='cloud']": {
    fill: 'var(--color-bg-aside)',
  },
  [mq['md']]: {
    width: '45rem',
  },
  [mq['lg']]: {
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
  }, [projectSvg.current, captionEl.current]);

  return (
    <AsideBar asideNavigationComponent={<AhmedhammedNavigation />}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" />
      </Head>
      <div className="p-8 lg:px-52 bg-secondary relative flex flex-col justify-center items-center">
        <MainTitle ref={captionEl} className="text-primary text-center text-2xl md:text-4xl mb-10 opacity-0">
          {t('hireMe.headerSection.title')}
        </MainTitle>

        <div ref={projectSvg} className="text-primary opacity-0">
          <ProjectStructureSvg className="w-96" />
        </div>
      </div>

      <div className="p-8 w-full">
        <Typography className="mb-16">
          <h6 className="uppercase font-bold">What do I offer as a service? 🤔</h6>
        </Typography>

        <div className="mb-16 flex flex-wrap">
          <ServiceCard
            title="BACK-END 🕸️"
            paragraph="I build scalable back-end applications to service multiple clients by using modern technologies such as back-end framework like Node.js and databases such as SQL / NoSQL with the best concepts from JWT / RESTfull API / GraphQL / Microservices."
            Icon={ApiSvg}
            className="w-full md:w-1/2"
          />

          <ServiceCard
            title="FRONT-END 🖼️"
            paragraph="Coding UX/UI is my responsibility. Client experience comes first when developing interfaces and services. Clean, reusable, and optimized code is my focus. I use the most modern framework such as React.js / Angular.js / Vue.js."
            Icon={ApiSvg}
            className="w-full md:w-1/2"
          />

          <ServiceCard
            title="DEV-OPS ⚙️"
            paragraph="I’ll help you host your website/web application and set up projects into containers to serve as a service by using Linux / Nginx / Docker / Docker-compose. This will give you more flexibility for feature modification and scalability."
            Icon={DockerSvg}
            className="w-full md:w-1/2"
          />
        </div>

        <div className="w-full">
          <Typography className="mb-16">
            <h6 className="uppercase font-bold">Why hiring me ? 🤔</h6>
          </Typography>

          <ServiceCard
            title="From the wise words of Steve Jobs, “IT DOESN'T MAKE SENSE TO HIRE SMART PEOPLE AND TELL THEM WHAT TO DO; WE HIRE SMART PEOPLE SO THEY CAN TELL US WHAT TO DO.”"
            Icon={QuoteSvg}
            className="w-full"
          />

          <BaseButton className="uppercase bg-subject text-reverse w-full justify-center" onClick={goToContactMe}>
            Hire me
          </BaseButton>
        </div>
      </div>
    </AsideBar>
  );
};

export default HireMe;
