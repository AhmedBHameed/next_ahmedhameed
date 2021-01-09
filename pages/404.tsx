import React from 'react';
import {NextPage} from 'next';

interface Custom404Props {}

const Custom404: NextPage<Custom404Props> = () => {
  return <h1>404 - Page Not Found</h1>;
};
export default Custom404;
