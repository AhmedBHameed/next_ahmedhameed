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

interface ForgotPasswordFormData {
  email: string;
  password: string;
}
const ForgotPassword: NextPage = () => {
  const forgotPasswordSchema = useMemo(
    () =>
      Joi.object({
        email: Joi.string()
          .email({tlds: {allow: false}})
          .required()
          .messages({
            'string.email': 'Invalid email',
            'string.empty': 'Field is required.',
          }),
      }),
    []
  );

  const {formState, errors, register, handleSubmit} = useForm<ForgotPasswordFormData>({
    resolver: joiResolver(forgotPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const forgotPassword = useCallback((formData: ForgotPasswordFormData) => {
    console.log(formData);
  }, []);

  const {email} = errors;

  return (
    <Onboarding title="Forgot password?" backgroundUrl="/images/january.jpg">
      <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(forgotPassword)}>
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

        <BaseButton
          type="submit"
          disabled={!formState.isValid}
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
        >
          Submit
        </BaseButton>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          Return to login?{' '}
          <Link href={ROUTES.login.path}>
            <a className="underline font-semibold">Log in.</a>
          </Link>
        </p>
      </div>
    </Onboarding>
  );
};

export default ForgotPassword;
