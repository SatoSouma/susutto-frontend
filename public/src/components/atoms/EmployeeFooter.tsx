import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';

const Footer: VFC = ({}, ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);
  const color = cookie.color;
  return <Box bg={`${color}.100`} h="5em" height="100" />;
};

export default Footer;
