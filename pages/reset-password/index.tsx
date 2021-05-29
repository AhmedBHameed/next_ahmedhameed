import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';
import {NextPage} from 'next';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {BaseButton} from '../../components/Buttons';
import {FormControl, TextField} from '../../components/Form';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import useNavigateToLogin from '../../components/Onboarding/Login/hooks/navigateToLoginHook';
import Onboarding from '../../components/Onboarding/Onboarding';
import {useTranslation} from '../../components/shared/hooks/translationHook';
import ROUTES from '../../config/Routes';
import {useResetPasswordMutation} from '../../graphql/queries';
import {confirmPasswordWith, requiredPassword} from '../../util/validations';

interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

const ResetPassword: NextPage = () => {
  const {query} = useRouter();
  const {t} = useTranslation();
  const {goToLogin} = useNavigateToLogin();
  const {triggerNotification} = useNotification();

  const [resetPassword, {loading}] = useResetPasswordMutation({
    onCompleted: () => {
      triggerNotification({
        type: 'success',
        message: t('resetPassword.success.passworedResetted'),
      });
      goToLogin();
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('<ResetPassword />', error);
      triggerNotification({
        type: 'error',
        message: t('common.error.somethingWentWrong'),
      });
    },
  });

  const loginSchema = useMemo(
    () =>
      Joi.object({
        newPassword: requiredPassword(),
        confirmPassword: confirmPasswordWith('newPassword'),
      }),
    []
  );

  const {
    formState: {errors},
    register,
    handleSubmit,
  } = useForm<ResetPasswordFormData>({
    resolver: joiResolver(loginSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const login = useCallback(
    async (formData: ResetPasswordFormData) => {
      try {
        await resetPassword({
          variables: {
            userData: {
              password: formData.newPassword,
              userId: query.userId as string,
              verificationId: query.validationId as string,
            },
          },
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('<ResetPassword />', error);
      }
    },
    [query, resetPassword]
  );

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
          label={t('resetPassword.newPasswordLabel')}
        >
          <TextField
            error={!!newPassword?.message}
            name="newPassword"
            placeholder={t('resetPassword.newPasswordPlaceholder')}
            testId="new-password-input"
            type="password"
            {...register('newPassword')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl
          className="flex flex-col pt-4"
          error={confirmPassword?.message}
          htmlFor="confirmPassword"
          label={t('resetPassword.confirmPasswordLabel')}
        >
          <TextField
            error={!!confirmPassword?.message}
            name="confirmPassword"
            placeholder={t('resetPassword.confirmPasswordPlaceholder')}
            testId="confirm-password-input"
            type="password"
            {...register('confirmPassword')}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <BaseButton
          className="bg-blue-500 justify-center duration-300 bg-black text-white font-bold text-lg hover:bg-blue-600 p-2 mt-8"
          disabled={loading}
          loading={loading}
          testId="reset-password-button"
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

// export const getStaticProps: GetStaticProps = async (props) => ({
//   props: {
//     ...props,
//   },
// });

export default ResetPassword;
