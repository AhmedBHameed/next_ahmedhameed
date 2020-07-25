import React from 'react';
import styled from 'styled-components';
import {NextPage} from 'next';
import Head from 'next/head';
import Template from '../template';

const Container = styled.div`
  background: ${props => props.theme.colors.headingSections};
  overflow: hidden;
`;

const about: NextPage = () => {
  return (
    <Template>
      <Head>
        <title>KAKIEE - about me</title>
      </Head>
      <Container>Testing ...</Container>
    </Template>
  );
};

export default about;
