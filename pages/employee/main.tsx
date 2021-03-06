/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { NextPageContext, NextPage } from 'next';
import { MainTemplete, TaskAction } from 'src';
import io from 'socket.io-client';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const mainPage: NextPage = ({}, ctx?: NextPageContext) => {
  const router = useRouter();
  const taskAction = new TaskAction();
  const dispatch = useDispatch();
  const socket = io(`${process.env.NEXT_PUBLIC_URL}`);
  const cookie = parseCookies(ctx);

  useEffect(() => {
    dispatch(taskAction.setColor(cookie.color));

    console.log(cookie.userId);
    if (!cookie.userId) {
      router.replace('/');
    }
    //Serverからメッセージを受信
    socket.on('chResult', (data: { message: boolean }) => {
      if (data.message) {
        console.log('通信きた');
        fetch(`${process.env.NEXT_PUBLIC_URL}/getAllTask?id=${cookie.userId}`)
          .then((res) => {
            return res.json();
          })
          .then((json) => dispatch(taskAction.setTaskInfo(json)));
      } else {
        console.log('error');
      }
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

  return !!cookie.userId ? (
    <>
      <Head>
        <title>Top</title>
      </Head>
      <MainTemplete socket={socket} />
    </>
  ) : (
    <></>
  );
};

// すべてのリクエストの度に実行される;
export function getServerSideProps() {
  return { props: {} };
}

export default mainPage;
