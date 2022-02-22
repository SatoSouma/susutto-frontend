import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { NextPageContext } from 'next';
import { TaskState } from 'public';
import { useSelector } from 'react-redux';

const Footer: VFC = ({}, ctx?: NextPageContext) => {
  const taskState = new TaskState();
  const color = useSelector(taskState.color);
  return <Box bg={`${color}.100`} h="5em" height="100" />;
};

export default Footer;
