import { NextPage } from 'next';
import { LoginTemplate } from 'public';
import Head from 'next/head';

const loginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginTemplate />
    </>
  );
};

export default loginPage;
