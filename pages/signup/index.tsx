import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';

import {BaseButton} from '../../components/Buttons';
import {FieldLabel, FormControl, TextField} from '../../components/Forms';
import Onboarding from '../../components/Onboarding/Onboarding';
import {useValidations} from '../../components/shared/hooks/useValidationsHook';
import ROUTES from '../../config/Routes';
import {joiResolver} from '../../util/joiResolver';
import {useSignupMutation, Signup} from '../../graphql/queries';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import {useTranslation} from '../../components/shared/hooks/useTranslate';
import {useNavigateToLogin} from '../../components/AsideBar/hooks/NavigateToLoginHook';

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
        type: 'success',
        message: t('signup.error.userNotRegistered'),
      });
    },
  });

  const {Joi, requiredEmail, requiredString, requiredPassword} = useValidations();
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
    []
  );

  const {formState, errors, register, handleSubmit} = useForm<Signup>({
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

  const sugmit = useCallback((formData: Signup) => {
    console.log(formData);
    try {
      signup({
        variables: {
          userData: formData,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const {email, password, name} = errors;

  return (
    <Onboarding title="Sign up" backgroundUrl="/images/girl-with-glasses.jpeg">
      <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(sugmit)}>
        <FormControl className="flex flex-col pt-4" error={name?.first?.message}>
          <FieldLabel className="text-lg" htmlFor="firstName">
            First name
          </FieldLabel>
          <TextField
            error={!!name?.first?.message}
            name="name.first"
            placeholder="First name"
            ref={register}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl className="flex flex-col pt-4" error={name?.last?.message}>
          <FieldLabel className="text-lg" htmlFor="lastName">
            Last Name
          </FieldLabel>
          <TextField
            error={!!name?.last?.message}
            name="name.last"
            placeholder="Last name"
            ref={register}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl className="flex flex-col pt-4" error={email?.message}>
          <FieldLabel className="text-lg" htmlFor="email">
            Email
          </FieldLabel>
          <TextField
            error={!!email?.message}
            type="email"
            name="email"
            placeholder="your@email.com"
            ref={register}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl className="flex flex-col pt-4" error={password?.message}>
          <FieldLabel className="text-lg" htmlFor="password">
            Password
          </FieldLabel>
          <TextField
            error={!!password?.message}
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <BaseButton
          type="submit"
          disabled={!formState.isValid}
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
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
