import { NextPage } from 'next';
import { AdminLoginTemplate } from 'public';
import Head from 'next/head';

const AdminLoginPage: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>AdminLogin</title>
      </Head>
      <AdminLoginTemplate />
    </>
  );
};

export function getServerSideProps() {
  // props を通じて Page に data を渡す
  return { props: {} };
}

export default AdminLoginPage;
