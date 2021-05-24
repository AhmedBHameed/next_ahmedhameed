// Extend jest prototype object with more useful functions from @testing-library.
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

// interface ElementProps {
//   children: React.ReactNode;
// }

const mockHistoryPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      locale: 'en',
      push: mockHistoryPush,
    };
  },
}));
// const mockLocationPathname = jest.fn();

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useHistory: () => ({
//     push: mockHistoryPush,
//   }),
//   useLocation: mockLocationPathname,
// }));

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({
//     t: (key: string) => key,
//     i18n: {language: 'en', languages: ['en']},
//   }),
//   Trans: (props: ElementProps) => props.children,
// }));

// /**
//  * Matching media query of (min-width: 768px) so:
//  * matches = true mockMediaQuery(md, md);
//  * matches = false mockMediaQuery(md, sm);
//  *
//  * @param windowWidth
//  * @param screenSize
//  */
// function mockMediaQuery(windowWidth: number, screenSize: number) {
//   Object.defineProperty(window, 'innerWidth', {
//     writable: true,
//     configurable: true,
//     value: windowWidth,
//   });

//   window.matchMedia = jest.fn().mockImplementation((query) => ({
//     matches: windowWidth <= screenSize,
//     media: query,
//     onchange: null,
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     addListener: jest.fn(),
//     removeListener: jest.fn(),
//   }));
// }

export {mockHistoryPush};
