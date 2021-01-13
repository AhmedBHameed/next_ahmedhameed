import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  background: ${props => props.theme.colors.bgHeading};
`;

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>KAKIEE - about me</title>
      </Head>
      <Container>Testing ...</Container>
    </>
  );
};

export default about;
