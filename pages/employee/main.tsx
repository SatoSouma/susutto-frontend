/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { NextPageContext, NextPage } from 'next';
import { MainTemplete, TaskAction } from 'public';
import io from 'socket.io-client';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { NextRouter, useRouter } from 'next/router';

type props = {
  router: NextRouter;
};

const mainPage: NextPage<props> = ({ router }, ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);

  if (!cookie.userId) {
    router.replace('/login');
  }

  const taskAction = new TaskAction();
  const dispatch = useDispatch();
  const socket = io();

  const socketFlug = () => {
    console.log('通信きた');
    fetch(`${process.env.NEXT_PUBLIC_URL}/getAllTask?id=${cookie.userId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => dispatch(taskAction.setTaskInfo(json)));
  };

  useEffect(() => {
    //Serverからメッセージを受信
    socket.on('chResult', (data: { message: boolean }) => {
      data.message ? socketFlug() : console.log('error');
    });

    fetch(`${process.env.NEXT_PUBLIC_URL}/getAllTask?id=${cookie.userId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        dispatch(taskAction.setTaskInfo(json));
      });
  }, []);

  return (
    <>
      <Head>
        <title>Top</title>
      </Head>
      <MainTemplete socket={socket} />
    </>
  );
};

// すべてのリクエストの度に実行される;
export function getServerSideProps() {
  const router = useRouter();
  // props を通じて Page に data を渡す
  return { props: { router } };
}

export default mainPage;
