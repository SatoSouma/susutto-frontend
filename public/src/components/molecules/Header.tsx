import { HeaderText, HeaderLink } from 'public';
import { VFC } from 'react';
import styles from './Header.module.scss';
import { Box, Grid, GridItem, Icon } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

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
