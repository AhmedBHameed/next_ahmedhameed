import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';
import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import useNavigateToAboutMe from '../../components/AboutMe/hooks/navigateToAboutMeHook';

import {BaseButton} from '../../components/Buttons';
import {FormControl, TextField} from '../../components/Form';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import Onboarding from '../../components/Onboarding/Onboarding';
import {useTranslation} from '../../components/shared/hooks/translationHook';
import ROUTES from '../../config/Routes';
import {useLoginLazyQuery} from '../../graphql/queries';
import {isInvalidPassword, notFoundOrInactive} from '../../util/errorHandlers';
import {requiredEmail, requiredPassword} from '../../util/validations';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const {triggerNotification} = useNotification();
  const {goToAboutMe} = useNavigateToAboutMe();
  const {t} = useTranslation();

  const [login, {loading}] = useLoginLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: () => goToAboutMe(),
    onError: (error) => {
      console.error(error);
      if (isInvalidPassword(error)) {
        triggerNotification({
          type: 'error',
          message: t('login.error.invalidPassword'),
        });
      } else if (notFoundOrInactive(error)) {
        triggerNotification({
          type: 'error',
          message: t('login.error.userNotFoundOrInactive'),
        });
      }
    },
  });

  const loginSchema = useMemo(
    () =>
      Joi.object({
        email: requiredEmail(),
        password: requiredPassword(),
      }),
    []
  );

  const {
    formState: {errors},
    register,
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: joiResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submit = useCallback(
    ({email, password}: LoginFormData) => {
      login({
        variables: {
          userData: {
            email,
            password,
          },
        },
      });
    },
    [login]
  );

  const {password, email} = errors;

  return (
    <Onboarding backgroundUrl="/images/todo-list.jpg" title="Log in">
      <form
        className="flex flex-col pt-3 md:pt-8"
        onSubmit={handleSubmit(submit)}
      >
        <FormControl
          className="flex flex-col pt-4"
          error={email?.message}
          htmlFor="email"
          label={t('common.emailLabel')}
        >
          <TextField
            error={!!email?.message}
            name="email"
            placeholder={t('common.emailPlaceholder')}
            testId="email-input"
            type="email"
            {...register('email')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl
          className="flex flex-col pt-4"
          error={password?.message}
          htmlFor="password"
          label={t('common.passwordLabel')}
        >
          <TextField
            error={!!password?.message}
            name="password"
            placeholder={t('common.passwordPlaceholder')}
            testId="password-input"
            type="password"
            {...register('password')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <div className="text-right pt-12 pb-12">
          {t('login.forgotPasswordLabel')}
          <Link href={ROUTES.forgotPassword.path}>
            <a className="underline font-semibold">
              {t('common.clickHereLink')}
            </a>
          </Link>
        </div>

        <BaseButton
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
          disabled={loading}
          loading={loading}
          testId="login-action-button"
          type="submit"
        >
          {t('login.loginActionButton')}
        </BaseButton>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          {"Don't have an account? "}
          <Link href={ROUTES.signup.path}>
            <a className="underline font-semibold">
              {t('login.registerLinkLabel')}
            </a>
          </Link>
        </p>
      </div>
    </Onboarding>
  );
};

export default Login;
