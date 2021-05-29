// Extend jest prototype object with more useful functions from @testing-library.
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'setimmediate';
import {toHaveNoViolations} from 'jest-axe';

expect.extend(toHaveNoViolations);

/**
 * This will solve next/image issue while testing @see https://github.com/vercel/next.js/discussions/18373#discussioncomment-114212
 */
process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: JSON.parse(
    // eslint-disable-next-line no-useless-escape
    `{\"deviceSizes\":[320,420,768,1024,1200],\"imageSizes\":[],\"domains\":[\"images.example.com\"],\"path\":\"/_next/image\",\"loader\":\"default\"}`
  ),
};

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    mapboxApiAccessToken:
      'pk.eyJ1IjoiYWhtZWRiaGFtZWVkIiwiYSI6ImNrNmNpd3M3ZzExZXMza21neGoxNHJoeDcifQ.07EbC691qPVJ86uLhJyfWA',
    domain: 'http://localhost:5000',
    graphqlApi: '/nodeys/v1/graphql',
    uploadApi: '/nodeys/api/upload',
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
  },
}));

const mockHistoryPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      locale: 'N/A', // We need to test locale keys and not the value of them
      push: mockHistoryPush,
    };
  },
}));

function mockConsoleErrorFun() {
  const mockConsoleError = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  return mockConsoleError;
}

export {mockHistoryPush, mockConsoleErrorFun};
