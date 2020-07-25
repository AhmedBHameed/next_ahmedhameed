import React from 'react';
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
      </Head>

      <h1>{t('footer.line1')}</h1>
    </Template>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default nextI18next.withTranslation('common')(Home);
