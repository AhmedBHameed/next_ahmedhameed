import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';
import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';

import useNavigateToAboutMe from '../../components/Blog/hooks/NavigateToBlogHook';
import {BaseButton} from '../../components/Buttons';
import {FormControl, TextField} from '../../components/Form';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import Onboarding from '../../components/Onboarding/Onboarding';
import ROUTES from '../../config/Routes';
import {useLoginLazyQuery} from '../../graphql/queries';
import {isInvalidPassword} from '../../util/errorHandlers';
import {PASSWORD_REGULAR_EXPRESSION} from '../../util/passwordRegularExpression';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const {triggerNotification} = useNotification();
  const {goToAboutMe} = useNavigateToAboutMe();

  const [login, {loading}] = useLoginLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: () => {
      goToAboutMe();
    },
    onError: (error) => {
      if (isInvalidPassword(error)) {
        triggerNotification({
          type: 'error',
          message: 'Oops! Invalid password',
        });
      }
    },
  });

  const loginSchema = useMemo(
    () =>
      Joi.object({
        email: Joi.string()
          .email({tlds: {allow: false}})
          .required()
          .messages({
            'string.email': 'Invalid email',
            'string.empty': 'Field is required.',
          }),
        password: Joi.string()
          .pattern(PASSWORD_REGULAR_EXPRESSION)
          .required()
          .messages({
            'string.empty': 'Field is required.',
            'string.pattern.base': `Your password must have at least: • 8 characters long Password • 1 uppercase and 1 lowercase character • 1 number • 1 non-alpha-numeric character • with no space`,
          }),
      }),
    []
  );

  const {
    formState: {errors, isValid},
    register,
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: joiResolver(loginSchema),
    mode: 'onChange',
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

        <div className="text-right pt-12 pb-12">
          Forgot password?{' '}
          <Link href={ROUTES.forgotPassword.path}>
            <a className="underline font-semibold">click here.</a>
          </Link>
        </div>

        <BaseButton
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
          disabled={!isValid || loading}
          type="submit"
        >
          Log In
        </BaseButton>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          {"Don't have an account? "}
          <Link href={ROUTES.signup.path}>
            <a className="underline font-semibold">Register here.</a>
          </Link>
        </p>
      </div>
    </Onboarding>
  );
};

export default Login;
