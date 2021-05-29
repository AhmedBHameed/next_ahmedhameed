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
import {mockResetPassword} from '../../../test/utils/generate';
import {client} from '../../../util/apolloClient';
import ResetPassword from '../index';

const MOCK_RESET_PASSWORD_DATA = mockResetPassword();

const mockConsoleError = mockConsoleErrorFun();

const mockNavigateToLogin = jest.fn();
jest.mock(
  '../../../components/Onboarding/Login/hooks/navigateToLoginHook',
  () => () => ({
    goToLogin: mockNavigateToLogin,
  })
);

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
        <ResetPassword />
      </ThemeProvider>
    </ApolloProvider>
  );
}

const makeSuccessfulCall = () => {
  server.use(
    graphql.mutation('ResetPassword', (req, res, ctx) =>
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
    graphql.mutation('ResetPassword', (_, res, ctx) =>
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

describe('ResetPassword', () => {
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
        fireEvent.click(getByTestId('reset-password-button'));
      });

      const inputErrors = await findAllByTestId('input-error');

      /**
       * The idea here is to match localization key of the error.
       */
      expect(inputErrors[0].textContent).toBe('validationError.required');
      expect(mockNavigateToLogin).toHaveBeenCalledTimes(0);
      expect(mockTriggerNotification).toHaveBeenCalledTimes(0);
    });

    it("shows password does not match helper text as a hint when they don't match.", async () => {
      const {findAllByTestId, getByTestId, debug} = renderComponent();

      /**
       * In case you wonder why we should use async act @see https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
       * Regarding line await waitFor(() => {})
       * It is a simulation for user behaviour (The test will fail without it).
       */
      await act(async () => {
        fireEvent.change(getByTestId('new-password-input'), {
          target: {value: MOCK_RESET_PASSWORD_DATA.newPassword},
        });
        await waitFor(() => {});

        fireEvent.change(getByTestId('confirm-password-input'), {
          target: {value: `${MOCK_RESET_PASSWORD_DATA.confirmPassword}_EXTRA`},
        });
        await waitFor(() => {});

        fireEvent.click(getByTestId('reset-password-button'));
      });

      const inputErrors = await findAllByTestId('input-error');

      expect(inputErrors[0].textContent).toBe(
        'validationError.passwordsNotMatch'
      );
      expect(mockNavigateToLogin).toHaveBeenCalledTimes(0);
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
        fireEvent.change(getByTestId('new-password-input'), {
          target: {value: MOCK_RESET_PASSWORD_DATA.newPassword},
        });
        await waitFor(() => {});

        fireEvent.change(getByTestId('confirm-password-input'), {
          target: {value: MOCK_RESET_PASSWORD_DATA.confirmPassword},
        });
        await waitFor(() => {});

        fireEvent.click(getByTestId('reset-password-button'));
      });

      await waitForElementToBeRemoved(() => queryByTestId('loading-icon'));

      expect(mockConsoleError).toHaveBeenCalledTimes(0);

      expect(mockNavigateToLogin).toHaveBeenCalledTimes(1);
      expect(mockNavigateToLogin).toHaveBeenCalledWith(/* Nothing */);

      expect(mockTriggerNotification).toHaveBeenCalledTimes(1);
      expect(mockTriggerNotification).toHaveBeenCalledWith({
        type: 'success',
        message: 'resetPassword.success.passworedResetted',
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
        fireEvent.change(getByTestId('new-password-input'), {
          target: {value: MOCK_RESET_PASSWORD_DATA.newPassword},
        });
        await waitFor(() => {});

        fireEvent.change(getByTestId('confirm-password-input'), {
          target: {value: MOCK_RESET_PASSWORD_DATA.confirmPassword},
        });
        await waitFor(() => {});

        fireEvent.click(getByTestId('reset-password-button'));
      });

      await waitForElementToBeRemoved(() => queryByTestId('loading-icon'));

      expect(mockNavigateToLogin).toHaveBeenCalledTimes(0);

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
