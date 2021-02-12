import Joi from 'joi';
import {useMemo} from 'react';
import {useTranslation} from './useTranslate';

export const useValidations = () => {
  const {t} = useTranslation();

  const validations = useMemo(
    () => ({
      optionalString: Joi.string().allow(''),
      requiredEmail: Joi.string()
        .email({tlds: {allow: false}})
        .required()
        .messages({
          'string.email': t('validationErrors.invalidEmail'),
          'string.empty': t('common.required'),
        }),
      requiredString: Joi.string()
        .required()
        .messages({
          'string.empty': t('common.required'),
        }),
    }),
    [t]
  );

  return {
    Joi,
    ...validations,
  };
};
