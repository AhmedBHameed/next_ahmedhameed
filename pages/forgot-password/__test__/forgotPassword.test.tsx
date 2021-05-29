import {ApolloProvider} from '@apollo/client';
import {ThemeProvider} from '@emotion/react';
import {
  act,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import {axe} from 'jest-axe';
import {mockConsoleErrorFun} from '../../../setupTests';
import {lightThemeColors} from '../../../styles/Theme';
import {graphql, server} from '../../../test/testServer';
import {genEmail} from '../../../test/utils/generate';
import {client} from '../../../util/apolloClient';
import ForgotPassword from '../index';

const mockConsoleError = mockConsoleErrorFun();

const mockTriggerNotification = jest.fn();
jest.mock(
  '../../../components/Notification/Hooks/NotificationHook',
  () => () => ({
    triggerNotification: mockTriggerNotification,
  })
);

function renderComponent() {
  return render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={lightThemeColors}>
        <ForgotPassword />
      </ThemeProvider>
    </ApolloProvider>
  );
}

const makeSuccessfulCall = () => {
  server.use(
    graphql.mutation('ForgotPassword', (req, res, ctx) =>
      res(
        ctx.delay(50),
        ctx.data({
          message: 'You password has been resetted',
        })
      )
    )
  );
};

const makeErrorCall = () => {
  server.use(
    graphql.mutation('ForgotPassword', (_, res, ctx) =>
      res(
        ctx.delay(50),
        ctx.errors([
          {
            message: 'Something went wrong',
            errorType: 'AuthenticationError',
            path: ['ResetPassword'],
            extensions: {
              code: 'BAD_USER_INPUT',
              errorCode: 'USER_NOT_FOUND_OR_INACTIVE',
              exception: {
                errorCode: 'USER_NOT_FOUND_OR_INACTIVE',
                statusCode: 400,
              },
              message: 'User not found or inactive!',
              statusCode: 400,
            },
          },
        ])
      )
    )
  );
};

describe('ForgotPassword', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot ', async () => {
    const {container} = renderComponent();
    await waitFor(() => {});

    expect(container).toMatchSnapshot();
  });

  describe('Form validation', () => {
    it('shows helper text as a hint when submitting invalid data.', async () => {
      const {findAllByTestId, getByTestId} = renderComponent();

      act(() => {
        fireEvent.click(getByTestId('forgot-password-button'));
      });

      const inputErrors = await findAllByTestId('input-error');

      /**
       * The idea here is to match localization key of the error.
       */
      expect(inputErrors[0].textContent).toBe('validationError.required');
      expect(mockTriggerNotification).toHaveBeenCalledTimes(0);
    });

    it('submits valid data and redirect to dashboard.', async () => {
      makeSuccessfulCall();

      const {getByTestId, queryByTestId} = renderComponent();

      /**
       * In case you wonder why we should use async act @see https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
       * Regarding line await waitFor(() => {})
       * It is a simulation for user behaviour (The test will fail without it).
       */
      await act(async () => {
        fireEvent.change(getByTestId('email-input'), {
          target: {value: genEmail()},
        });
        await waitFor(() => {});

        fireEvent.click(getByTestId('forgot-password-button'));
      });

      await waitForElementToBeRemoved(() => queryByTestId('loading-icon'));

      expect(mockConsoleError).toHaveBeenCalledTimes(0);

      expect(mockTriggerNotification).toHaveBeenCalledTimes(1);
      expect(mockTriggerNotification).toHaveBeenCalledWith({
        type: 'success',
        message: 'forgotPassword.success.sendResetPasswordLink',
      });
    });

    it('triggers toast message when async throw an error', async () => {
      makeErrorCall();

      const {getByTestId, queryByTestId} = renderComponent();

      /**
       * In case you wonder why we should use async act @see https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
       * Regarding line await waitFor(() => {})
       * It is a simulation for user behaviour (The test will fail without it).
       */
      await act(async () => {
        fireEvent.change(getByTestId('email-input'), {
          target: {value: genEmail()},
        });
        await waitFor(() => {});

        fireEvent.click(getByTestId('forgot-password-button'));
      });

      await waitForElementToBeRemoved(() => queryByTestId('loading-icon'));

      expect(mockConsoleError).toHaveBeenCalledTimes(1);
      expect(mockTriggerNotification).toHaveBeenCalledTimes(1);
      expect(mockTriggerNotification).toHaveBeenCalledWith({
        type: 'error',
        message: 'common.error.somethingWentWrong',
      });
    });

    it('accessability check', async () => {
      const {container} = renderComponent();

      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
