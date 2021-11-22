import {NextPage} from 'next';

import AhmedhammedNavigation from '../../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation';
import AsideBar from '../../components/AsideBar/AsideBar';
import Divider from '../../components/Divider/Divider';
import Timeline, {
  HistoryTimelineModel,
} from '../../components/Timeline/Timeline';
import Typography from '../../components/Typography/Typography';
import {groupBy} from '../../util/groupBy';

const now = 'Now';

export const REACT_TAG = {
  name: 'ReactJS',
  href: 'https://reactjs.org/',
  color: '#61DAFB',
};
export const NODE_TAG = {
  name: 'NodeJS',
  href: 'https://nodejs.org/en/',
  color: '#43853D',
};
export const MONGODB_TAG = {
  name: 'MongoDB',
  href: 'https://www.mongodb.com/',
  color: '#50AB53',
};
export const EXPRESS_TAG = {
  name: 'ExpressJS',
  href: 'https://expressjs.com/',
  color: '#EA8F2A',
};
export const GRAPHQL_TAG = {
  name: 'GraphQL',
  href: 'https://graphql.org/',
  color: '#E35698',
};
export const REACT_TESTING_LIBRARY_TAG = {
  name: 'React testing library',
  href: 'https://testing-library.com/',
  color: '#F24743',
};
export const ANGULAR_TAG = {
  name: 'Angular',
  href: 'https://angular.io/',
  color: '#DF3F32',
};
export const LARAVEL_TAG = {
  name: 'Laravel',
  href: 'https://laravel.com/',
  color: '#F35D56',
};
export const VUE_TAG = {
  name: 'VueJS',
  href: 'https://vuejs.org/',
  color: '#50B883',
};

const activity: HistoryTimelineModel[] = [
  {
    id: '1',
    type: 'assignment',
    person: {name: 'Your company', href: '#'},
    assigned: {name: 'Ahmed HAMEED', href: 'https://github.com/AhmedBHameed'},
    date: 'few seconds ago',
    year: now,
  },
  {
    id: '2',
    type: 'tags',
    person: {name: 'Ahmed HAMEED', href: 'https://www.ahmedhameed.dev/hire-me'},
    tags: [
      MONGODB_TAG,
      EXPRESS_TAG,
      REACT_TAG,
      NODE_TAG,
      GRAPHQL_TAG,
      REACT_TESTING_LIBRARY_TAG,
    ],
    date: 'More than 5 years (Experience)',
    year: now,
  },
  {
    id: '3',
    type: 'comment',
    person: {name: 'Ahmed HAMEED', href: 'https://www.ahmedhameed.dev'},
    imageUrl: 'https://avatars.githubusercontent.com/u/25675361?v=4',
    comment:
      "Freelancer/Contractor digital entrepreneur. By hiring me, I can provide you with the most modern technologies to build/improve your projects. I've worked with many digital companies which makes me experienced in the field. Please consider merging your project to my history timeline 🚀",
    date: 'more than 6 years (Experience)',
    year: now,
  },
  // myBioma
  {
    id: '4',
    type: 'assignment',
    person: {name: 'myBioma (Clickable)', href: '#'},
    assigned: {name: 'Ahmed HAMEED', href: 'https://github.com/AhmedBHameed'},
    date: 'on May 2021',
    year: '2021',
  },
  {
    id: '5',
    type: 'tags',
    person: {name: 'Ahmed HAMEED', href: 'https://www.ahmedhameed.dev/hire-me'},
    tags: [REACT_TAG, REACT_TESTING_LIBRARY_TAG],
    date: 'on May 2021',
    year: '2021',
  },
  {
    id: '6',
    type: 'comment',
    person: {name: 'myBioma (Clickable)', href: 'https://www.mybioma.com/en'},
    imageUrl: `/images/myBioma.jpg`,
    comment:
      'Contractor with BiomeDx. It is a web application that helps doctors order patient diagnosis reports due to a complex algorithm of questionnaires. My responsibility was to design and develop UI/UX for the platform using React technology.',
    date: 'on May 2021',
    year: '2021',
  },
  // Hi health
  {
    id: '7',
    type: 'assignment',
    person: {name: 'hi.health (Clickable)', href: 'https://hi.health/'},
    assigned: {name: 'Ahmed HAMEED', href: 'https://github.com/AhmedBHameed'},
    date: 'on April 2020',
    year: '2020',
  },
  {
    id: '8',
    type: 'tags',
    person: {name: 'Ahmed HAMEED', href: 'https://www.ahmedhameed.dev/hire-me'},
    tags: [REACT_TAG, REACT_TESTING_LIBRARY_TAG],
    date: 'on April 2020',
    year: '2020',
  },
  {
    id: '9',
    type: 'comment',
    person: {name: 'hi.health (Clickable)', href: 'https://hi.health/'},
    imageUrl: `/images/hihealth.jpg`,
    comment:
      'Health insurance has never been easy to handle. My responsibility was to migrating the front-end platform and build a back-office interface using React.js technology. (Click on company name to see the source)',
    date: 'on April 2020',
    year: '2020',
  },
  // Yelster digital
  {
    id: '10',
    type: 'assignment',
    person: {
      name: 'Yelster digital (Clickable)',
      href: 'https://www.yelsterdigital.com/',
    },
    assigned: {name: 'Ahmed HAMEED', href: 'https://github.com/AhmedBHameed'},
    date: 'on May 2019',
    year: '2019',
  },
  {
    id: '11',
    type: 'tags',
    person: {name: 'Ahmed HAMEED', href: 'https://www.ahmedhameed.dev/hire-me'},
    tags: [ANGULAR_TAG],
    date: 'on May 2019',
    year: '2019',
  },
  {
    id: '12',
    type: 'comment',
    person: {
      name: 'Yelster digital (Clickable)',
      href: 'https://www.yelsterdigital.com/',
    },
    imageUrl: `/images/yelsterdigital.png`,
    comment:
      'As a contractor,Developing with the reset of the team web app platform to develop innovative online services for small and medium-sized businesses as well as for large enterprises to help them to accelerate their growth. The stack was Angular technology with NgRx. (Click on company name to see the source)',
    date: 'on May 2019',
    year: '2019',
  },

  // Moonshiner
  {
    id: '13',
    type: 'assignment',
    person: {
      name: 'Moonshiner (Clickable)',
      href: 'https://www.moonshiner.at/',
    },
    assigned: {name: 'Ahmed HAMEED', href: 'https://github.com/AhmedBHameed'},
    date: 'on August 2018',
    year: '2018',
  },
  {
    id: '14',
    type: 'tags',
    person: {name: 'Ahmed HAMEED', href: 'https://www.ahmedhameed.dev/hire-me'},
    tags: [REACT_TAG, LARAVEL_TAG, VUE_TAG],
    date: 'on August 2018',
    year: '2018',
  },
  {
    id: '15',
    type: 'comment',
    person: {
      name: 'Moonshiner (Clickable)',
      href: 'https://www.moonshiner.at/',
    },
    imageUrl: `/images/moonshiner.jpeg`,
    comment:
      'Project developer responsible for implementing new features for projects as a full-stack. Working with, PHP Laravel framework as back-end, React.js or Vue.js as front-end and MySQL as Database. (Click on company name to see the source)',
    date: 'on August 2018',
    year: '2018',
  },
  // Wiser
  {
    id: '16',
    type: 'assignment',
    person: {
      name: 'WisR (Clickable)',
      href: 'https://www.growwisr.com/',
    },
    assigned: {name: 'Ahmed HAMEED', href: 'https://github.com/AhmedBHameed'},
    date: 'on November 2017',
    year: '2017',
  },
  {
    id: '17',
    type: 'tags',
    person: {name: 'Ahmed HAMEED', href: 'https://www.ahmedhameed.dev/hire-me'},
    tags: [ANGULAR_TAG],
    date: 'on November 2017',
    year: '2017',
  },
  {
    id: '18',
    type: 'comment',
    person: {
      name: 'WisR (Clickable)',
      href: 'https://www.growwisr.com/',
    },
    imageUrl: `/images/wiser.png`,
    comment:
      'Front-End (Angular) contractor at WisR company to build a platform for silver agent jobs matching. (Click on company name to see the source)',
    date: 'on November 2017',
    year: '2017',
  },
];

const Portfolio: NextPage = () => (
  <AsideBar asideNavigationComponent={<AhmedhammedNavigation />}>
    <div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <Typography className="mb-16">
        <h6 className="uppercase font-bold">
          [ Ahmed / +43677-6276-8620 ] Adding portfolio and relevent timeline
          (Merge request) 🗃️
        </h6>
      </Typography>

      {groupBy<HistoryTimelineModel[]>(activity, 'year').map(
        (timelineGroup, index) => (
          <div className="flex flex-col" key={index.toString()}>
            <Divider label={timelineGroup[0]?.year} />
            <Timeline historyTimeline={timelineGroup} />
          </div>
        )
      )}
    </div>
  </AsideBar>
);

export default Portfolio;
