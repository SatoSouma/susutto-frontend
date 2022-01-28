import { HeaderText, HeaderLink } from 'public';
import { VFC } from 'react';
import styles from './Header.module.scss';
import { Box, Grid, GridItem } from '@chakra-ui/react';

const Header: VFC = () => {
  return (
    <Box bg="LimeGreen.100">
      <Box h="4em" borderBottom="white">
        <HeaderText />
      </Box>
      <hr />
      <HeaderLink />
    </Box>
  );
};

export default Header;
