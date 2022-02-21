/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { AdminMainTemplete, TaskAction } from 'public';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';

const adminMainPage: NextPage = ({}, ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);
  const router = useRouter();
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
    if (!cookie.userId) {
      router.replace('/AdminLogin');
    }

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
  return { props: {} };
}

export default adminMainPage;
