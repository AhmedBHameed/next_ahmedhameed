import {joiResolver} from '@hookform/resolvers/joi';
import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';

import {BaseButton} from '../../components/Buttons';
import {FormControl, TextField} from '../../components/Form';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import useNavigateToLogin from '../../components/Onboarding/Login/hooks/navigateToLoginHook';
import Onboarding from '../../components/Onboarding/Onboarding';
import {useTranslation} from '../../components/shared/hooks/translationHook';
import ROUTES from '../../config/Routes';
import {Signup, useSignupMutation} from '../../graphql/queries';
import {
  Joi,
  requiredEmail,
  requiredPassword,
  requiredString,
} from '../../util/validations';

const SignUp: NextPage = () => {
  const {triggerNotification} = useNotification();
  const {goToLogin} = useNavigateToLogin();
  const {t} = useTranslation();
  const [signup, {loading}] = useSignupMutation({
    onCompleted: () => {
      triggerNotification({
        type: 'success',
        message: t('signup.success.userRegistered'),
      });
      goToLogin();
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('<Signup />', error);
      triggerNotification({
        type: 'error',
        message: t('signup.error.userNotRegistered'),
      });
    },
  });

  const signupSchema = useMemo(
    () =>
      Joi.object({
        name: Joi.object({
          first: requiredString(),
          last: requiredString(),
        }),
        email: requiredEmail(),
        password: requiredPassword(),
      }),
    []
  );

  const {
    formState: {errors},
    register,
    handleSubmit,
  } = useForm<Signup>({
    resolver: joiResolver(signupSchema),
    defaultValues: {
      name: {
        first: '',
        last: '',
      },
      email: '',
      password: '',
    },
  });

  const submit = useCallback(
    (formData: Signup) => {
      try {
        signup({
          variables: {
            userData: formData,
          },
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    [signup]
  );

  const {email, password, name} = errors;

  return (
    <Onboarding backgroundUrl="/images/girl-with-glasses.jpeg" title="Sign up">
      <form
        className="flex flex-col pt-3 md:pt-8"
        onSubmit={handleSubmit(submit)}
      >
        <FormControl
          className="flex flex-col pt-4"
          error={name?.first?.message}
          htmlFor="firstName"
          label={t('signup.firstNameLabel')}
        >
          <TextField
            error={!!name?.first?.message}
            name="name.first"
            placeholder={t('signup.firstNamePlaceholder')}
            testId="last-name-input"
            {...register('name.first')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl
          className="flex flex-col pt-4"
          error={name?.last?.message}
          htmlFor="lastName"
          label={t('signup.lastNameLabel')}
        >
          <TextField
            error={!!name?.last?.message}
            name="name.last"
            placeholder={t('signup.lastNamePlaceholder')}
            testId="first-name-input"
            {...register('name.last')}
            className="text-primary bg-secondary"
          />
        </FormControl>

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

        <BaseButton
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
          disabled={loading}
          loading={loading}
          testId="signup-action-button"
          type="submit"
        >
          {t('signup.registerActionButton')}
        </BaseButton>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          {t('signup.haveAnAccount')}
          <Link href={ROUTES.login.path}>
            <a className="underline font-semibold">
              {t('signup.loginHereLinkLabel')}
            </a>
          </Link>
        </p>
      </div>
    </Onboarding>
  );
};

export default SignUp;
