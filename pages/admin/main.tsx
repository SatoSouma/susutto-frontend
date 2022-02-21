/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { AdminMainTemplete, TaskAction } from 'public';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';

type props = {
  router: NextRouter;
};

const adminMainPage: NextPage<props> = ({ router }, ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);

  if (!cookie.userId) {
    router.replace('/AdminLogin');
  }

  const socket = io();
  const taskAction = new TaskAction();
  const dispatch = useDispatch();

  const socketFlug = () => {
    console.log('通信きた');
    fetch(`${process.env.NEXT_PUBLIC_URL}/getAdminTask`)
      .then((res) => {
        return res.json();
      })
      .then((json) => dispatch(taskAction.setAdminTasks(json)));
  };

  useEffect(() => {
    //Serverからメッセージを受信
    socket.on('crResult', (data: { message: boolean }) => {
      if (data.message) {
        socketFlug();
        dispatch(taskAction.setPage('list'));
      } else {
        console.log('error');
      }
    });

    fetch(`${process.env.NEXT_PUBLIC_URL}/getAdminTask`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(taskAction.setAdminTasks(json));
      });
  }, []);

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <AdminMainTemplete socket={socket} />
    </>
  );
};

// すべてのリクエストの度に実行される;
export function getServerSideProps() {
  // props を通じて Page に data を渡す
  const router = useRouter();
  return { props: { router: router } };
}

export default adminMainPage;
