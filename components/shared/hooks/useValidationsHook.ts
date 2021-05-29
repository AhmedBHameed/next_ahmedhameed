import Joi from 'joi';
import {useMemo} from 'react';
import {PASSWORD_REGULAR_EXPRESSION} from '../../../util/passwordRegularExpression';

import {useTranslation} from './translationHook';

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
      requiredPassword: Joi.string()
        .pattern(PASSWORD_REGULAR_EXPRESSION)
        .required()
        .messages({
          'string.empty': t('common.required'),
          'string.pattern.base': t('validationErrors.invalidPassword'),
        }),
      requiredArrayOfStrings: Joi.array().items(Joi.string()),
      requiredArrayOfItems: Joi.array(),
    }),
    [t]
  );

  return {
    Joi,
    ...validations,
  };
};
