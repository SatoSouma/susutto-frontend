import React, { VFC } from 'react';
import { NextPage } from 'next';
import { MainTemplete } from 'public';
import Head from 'next/head';

const mainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Top</title>
      </Head>
      <MainTemplete />
    </>
  );
};

export default mainPage;
