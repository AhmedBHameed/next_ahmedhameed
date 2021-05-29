import {mockTimelineData} from '../test/utils/generate';
import {groupBy} from './groupBy';

const MOCK_HISTORY_TIMELINE_DATA = mockTimelineData();

/**
 * The test should return object like the following:
 * 
 * [
      [
        {
          id: '6f2311a3-f758-48af-bcde-9415b4ca2c3b',
          type: 'tags',
          person: [Object],
          tags: [Array],
          date: 'More than 5 years (Experience)',
          year: '2021'
        }
      ],
      [
        {
          id: '5b2927d0-d116-4808-92d4-8221754cd1ea',
          type: 'comment',
          person: [Object],
          tags: [Array],
          date: 'More than 5 years (Experience)',
          year: '2020'
        }
      ]
    ]

 */

describe('groupBy utility function', () => {
  it('groups entities by year', () => {
    expect(groupBy(MOCK_HISTORY_TIMELINE_DATA, 'year')).toMatchObject([
      [MOCK_HISTORY_TIMELINE_DATA[0]],
      [MOCK_HISTORY_TIMELINE_DATA[1]],
    ]);
  });
});
