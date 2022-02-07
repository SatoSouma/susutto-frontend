import { NextPage } from 'next';
import Head from 'next/head';
import { AdminMainTemplete } from 'public';

const adminMainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <AdminMainTemplete />
    </>
  );
};

export default adminMainPage;
