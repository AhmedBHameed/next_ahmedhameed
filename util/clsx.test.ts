import {clsx} from './clsx';

it('returns classes separated by space', () => {
  expect(clsx(['classA', 'classB'])).toEqual('classA classB');
});
