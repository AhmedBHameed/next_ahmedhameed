import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';
import {NextPage} from 'next';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';

import {BaseButton} from '../../components/Buttons';
import {FormControl, TextField} from '../../components/Form';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import Onboarding from '../../components/Onboarding/Onboarding';
import {useTranslation} from '../../components/shared/hooks/translationHook';
import ROUTES from '../../config/Routes';
import {useForgotPasswordMutation} from '../../graphql/queries';
import {requiredEmail} from '../../util/validations';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: NextPage = () => {
  const {t} = useTranslation();
  const {triggerNotification} = useNotification();

  const [forgotPassword, {loading}] = useForgotPasswordMutation({
    onCompleted: () => {
      triggerNotification({
        type: 'success',
        message: t('forgotPassword.success.sendResetPasswordLink'),
      });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('<ForgotPassword />', error);
      triggerNotification({
        type: 'error',
        message: t('common.error.somethingWentWrong'),
      });
    },
  });

  const forgotPasswordSchema = useMemo(
    () =>
      Joi.object({
        email: requiredEmail(),
      }),
    []
  );

  const {
    formState: {errors},
    register,
    handleSubmit,
  } = useForm<ForgotPasswordFormData>({
    resolver: joiResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleForgotPassword = useCallback(
    async (formData: ForgotPasswordFormData) => {
      try {
        await forgotPassword({
          variables: {
            email: formData.email,
          },
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    [forgotPassword]
  );

  const {email} = errors;

  return (
    <Onboarding backgroundUrl="/images/january.jpg" title="Forgot password?">
      <form
        className="flex flex-col pt-3 md:pt-8"
        onSubmit={handleSubmit(handleForgotPassword)}
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

        <BaseButton
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
          disabled={loading}
          loading={loading}
          testId="forgot-password-button"
          type="submit"
        >
          {t('resetPassword.resetPasswordActionButton')}
        </BaseButton>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          {t('common.returnToLoginLabel')}
          <Link href={ROUTES.login.path}>
            <a className="underline font-semibold">
              {t('common.clickHereLink')}
            </a>
          </Link>
        </p>
      </div>
    </Onboarding>
  );
};

export default ForgotPassword;
