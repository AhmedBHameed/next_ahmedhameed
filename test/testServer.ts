/* eslint-disable semi */
/**
 * Please @see https://kentcdodds.com/blog/stop-mocking-fetch
 * Those modules required only in devDependencies.
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import {graphql} from 'msw';
import {setupServer} from 'msw/node';

const server = setupServer(
  graphql.query('*', (_, res, ctx) =>
    res(
      ctx.errors([
        {
          message: 'UNAUTHORIZED',
          errorType: 'AuthenticationError',
        },
      ])
    )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export {server, graphql};
