import {joiResolver} from '@hookform/resolvers/joi';
import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';

import {useNavigateToLogin} from '../../components/AsideBar/hooks/NavigateToLoginHook';
import {BaseButton} from '../../components/Buttons';
import {FormControl, TextField} from '../../components/Form';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import Onboarding from '../../components/Onboarding/Onboarding';
import {useTranslation} from '../../components/shared/hooks/useTranslate';
import {useValidations} from '../../components/shared/hooks/useValidationsHook';
import ROUTES from '../../config/Routes';
import {Signup, useSignupMutation} from '../../graphql/queries';

const SignUp: NextPage = () => {
  const {triggerNotification} = useNotification();
  const {goToLogin} = useNavigateToLogin();
  const {t} = useTranslation();
  const [signup] = useSignupMutation({
    onCompleted: () => {
      triggerNotification({
        type: 'success',
        message: t('signup.success.userRegistered'),
      });
      goToLogin();
    },
    onError: () => {
      triggerNotification({
        type: 'error',
        message: t('signup.error.userNotRegistered'),
      });
    },
  });

  const {Joi, requiredEmail, requiredString, requiredPassword} =
    useValidations();
  const signupSchema = useMemo(
    () =>
      Joi.object({
        name: Joi.object({
          first: requiredString,
          last: requiredString,
        }),
        email: requiredEmail,
        password: requiredPassword,
      }),
    [Joi, requiredEmail, requiredString, requiredPassword]
  );

  const {
    formState: {errors, isValid},
    register,
    handleSubmit,
  } = useForm<Signup>({
    resolver: joiResolver(signupSchema),
    mode: 'onChange',
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
          label="First name"
        >
          <TextField
            error={!!name?.first?.message}
            name="name.first"
            placeholder="First name"
            {...register('name.first')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl
          className="flex flex-col pt-4"
          error={name?.last?.message}
          htmlFor="lastName"
          label="Last Name"
        >
          <TextField
            error={!!name?.last?.message}
            name="name.last"
            placeholder="Last name"
            {...register('name.last')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl
          className="flex flex-col pt-4"
          error={email?.message}
          htmlFor="email"
          label="Email"
        >
          <TextField
            error={!!email?.message}
            name="email"
            placeholder="your@email.com"
            type="email"
            {...register('email')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl
          className="flex flex-col pt-4"
          error={password?.message}
          htmlFor="password"
          label="Password"
        >
          <TextField
            error={!!password?.message}
            name="password"
            placeholder="Password"
            type="password"
            {...register('password')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <BaseButton
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
          disabled={!isValid}
          type="submit"
        >
          Register
        </BaseButton>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          have an account?{' '}
          <Link href={ROUTES.login.path}>
            <a className="underline font-semibold">Login here.</a>
          </Link>
        </p>
      </div>
    </Onboarding>
  );
};

export default SignUp;
