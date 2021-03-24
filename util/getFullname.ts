import {Username} from '../graphql/queries';

export const getFullName = (name?: Username | null) => `${name?.first || ''} ${name?.last || ''}`;
