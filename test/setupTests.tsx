// Extend jest prototype object with more useful functions from @testing-library.
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'setimmediate';
import {toHaveNoViolations} from 'jest-axe';

expect.extend(toHaveNoViolations);

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

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
