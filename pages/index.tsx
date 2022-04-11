import { NextPage } from 'next';
import { LoginTemplate } from 'src';
import Head from 'next/head';

const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
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

export default Home;
