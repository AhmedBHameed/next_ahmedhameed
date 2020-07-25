import React from 'react';
import PropTypes from 'prop-types';
import {NextPage} from 'next';
import {useTranslation} from '../i18n';

interface Custom404Props {}

const Custom404: NextPage<Custom404Props> = () => {
  return <h1>404 - Page Not Found</h1>;
};
export default Custom404;
