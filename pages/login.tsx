import { NextPage } from 'next';
import { LoginTemplate } from 'public';
import Head from 'next/head';

const loginPage: NextPage = ({}) => {
  return (
    <>
      <Head>
        {console.log(`${process.env.NEXT_PUBLIC_URL}`)}
        <title>Login</title>
      </Head>
      <LoginTemplate />
    </>
  );
};

export function getServerSideProps() {
  // props を通じて Page に data を渡す
  return { props: {} };
}

export default loginPage;
