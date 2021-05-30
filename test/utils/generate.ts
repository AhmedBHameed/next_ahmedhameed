import faker from 'faker';
import {HistoryTimelineModel} from '../../components/Timeline/Timeline';
import {
  ANGULAR_TAG,
  EXPRESS_TAG,
  GRAPHQL_TAG,
  LARAVEL_TAG,
  MONGODB_TAG,
  NODE_TAG,
  REACT_TAG,
  REACT_TESTING_LIBRARY_TAG,
  VUE_TAG,
} from '../../pages/portfolio';

/**
 * Faker functions for rapid access.
 * Please use faker generation only with forms. Using it with static elements cause issues with
 * snapshot test which should not update with static components.
 */

const genAmount = (): number => Math.trunc(Number(faker.finance.amount) * 100);
const genDate = faker.date.recent;
const genEmail = faker.internet.email;
// const genPassword = faker.internet.password;
const genName = faker.name.findName;
const genId = faker.datatype.uuid;
const genNumber = faker.datatype.number;
const genBoolean = faker.datatype.boolean;
const genCountryName = faker.address.country;
// const genPhoneNumber = faker.phone.phoneNumber;
const genNotes = faker.lorem.paragraph;
const genTitle = faker.lorem.sentence;

const mockLoginData = () => ({
  email: genEmail(),
  password: 'Test@123123',
});

const mockSignupData = () => ({
  name: {
    first: genName(),
    last: genName(),
  },
  email: genEmail(),
  password: 'Test@123123',
});

const mockResetPassword = () => ({
  newPassword: 'Test@123123',
  confirmPassword: 'Test@123123',
});

const mockContactMe = () => ({
  email: genEmail(),
  name: genName(),
  subject: genTitle(),
  message: genNotes(),
});

const mockTimelineData = (): HistoryTimelineModel[] => [
  {
    id: genId(),
    type: 'tags',
    person: {name: 'Ahmed HAMEED', href: 'https://ahmedhameed.dev/hire-me'},
    tags: [
      MONGODB_TAG,
      EXPRESS_TAG,
      REACT_TAG,
      NODE_TAG,
      GRAPHQL_TAG,
      REACT_TESTING_LIBRARY_TAG,
      VUE_TAG,
      LARAVEL_TAG,
      ANGULAR_TAG,
    ],
    date: 'More than 5 years (Experience)',
    year: '2021',
  },
  {
    id: genId(),
    type: 'comment',
    person: {name: 'Ahmed HAMEED', href: 'https://ahmedhameed.dev/hire-me'},
    tags: [
      MONGODB_TAG,
      EXPRESS_TAG,
      REACT_TAG,
      NODE_TAG,
      GRAPHQL_TAG,
      REACT_TESTING_LIBRARY_TAG,
      VUE_TAG,
      LARAVEL_TAG,
      ANGULAR_TAG,
    ],
    date: 'More than 5 years (Experience)',
    year: '2020',
  },
];

export {
  genAmount,
  genBoolean,
  genCountryName,
  genDate,
  genEmail,
  genId,
  genName,
  genNotes,
  genNumber,
  genTitle,
  mockContactMe,
  mockLoginData,
  mockResetPassword,
  mockSignupData,
  mockTimelineData,
};
