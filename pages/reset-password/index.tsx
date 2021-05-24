import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';
import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';

import {BaseButton} from '../../components/Buttons';
import {FormControl, TextField} from '../../components/Form';
import Onboarding from '../../components/Onboarding/Onboarding';
import ROUTES from '../../config/Routes';
import {PASSWORD_REGULAR_EXPRESSION} from '../../util/passwordRegularExpression';

interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}
const ResetPassword: NextPage = () => {
  const loginSchema = useMemo(
    () =>
      Joi.object({
        newPassword: Joi.string()
          .pattern(PASSWORD_REGULAR_EXPRESSION)
          .required()
          .messages({
            'string.empty': 'Field is required.',
            'string.pattern.base': `Your password must have at least: • 8 characters long Password • 1 uppercase and 1 lowercase character • 1 number • 1 non-alpha-numeric character • with no space`,
          }),
        confirmPassword: Joi.string()
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
  } = useForm<ResetPasswordFormData>({
    resolver: joiResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const login = useCallback((formData: ResetPasswordFormData) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  }, []);

  const {newPassword, confirmPassword} = errors;

  return (
    <Onboarding backgroundUrl="/images/hijab.jpg" title="Reset password">
      <form
        className="flex flex-col pt-3 md:pt-8"
        onSubmit={handleSubmit(login)}
      >
        <FormControl
          className="flex flex-col pt-4"
          error={newPassword?.message}
          htmlFor="newPassword"
          label="New password"
        >
          <TextField
            error={!!newPassword?.message}
            name="newPassword"
            placeholder="New password"
            type="password"
            {...register('newPassword')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl
          className="flex flex-col pt-4"
          error={confirmPassword?.message}
          htmlFor="confirmPassword"
          label="Confirm password"
        >
          <TextField
            error={!!confirmPassword?.message}
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            {...register('confirmPassword')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <BaseButton
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
          disabled={!isValid}
          type="submit"
        >
          Reset password
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

export default ResetPassword;
