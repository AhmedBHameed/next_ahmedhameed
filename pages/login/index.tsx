import Joi from 'joi';
import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import BaseButton from '../../components/Buttons/BaseButton';
import {TextField, FieldLabel, FormControl} from '../../components/Forms';
import Onboarding from '../../components/Onboarding/Onboarding';
import ROUTES from '../../config/Routes';
import {joiResolver} from '../../util/joiResolver';
import {PASSWORD_REGULAR_EXPRESSION} from '../../util/passwordRegularExpression';

interface LoginFormData {
  email: string;
  password: string;
}
const Login: NextPage = () => {
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
        password: Joi.string().pattern(PASSWORD_REGULAR_EXPRESSION).required().messages({
          'string.empty': 'Field is required.',
          'string.pattern.base': `Your password must have at least: • 8 characters long Password • 1 uppercase and 1 lowercase character • 1 number • 1 non-alpha-numeric character • with no space`,
        }),
      }),
    []
  );

  const {formState, errors, register, handleSubmit} = useForm<LoginFormData>({
    resolver: joiResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useCallback((formData: LoginFormData) => {
    console.log(formData);
  }, []);

  const {password, email} = errors;

  return (
    <Onboarding>
      <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(login)}>
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

        <FormControl className="flex flex-col pt-4" error={email?.message}>
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
          Log In
        </BaseButton>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          Don't have an account?{' '}
          <Link href={ROUTES.signup.path}>
            <a className="underline font-semibold">Register here.</a>
          </Link>
        </p>
      </div>
    </Onboarding>
  );
};

export default Login;
