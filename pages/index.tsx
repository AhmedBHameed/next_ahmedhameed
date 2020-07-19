import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import nextI18next, {useTranslation} from '../i18n';
import Template from '../template';
import {NextPage} from 'next';

const Home: NextPage = () => {
  const {t} = useTranslation();
  return (
    <Template>
      <Head>
        <title>KAKIEE</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet" />
      </Head>

      <h1>{t('footer.line1')}</h1>
    </Template>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default nextI18next.withTranslation('common')(Home);
