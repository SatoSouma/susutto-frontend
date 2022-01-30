import { AdminHeaderText, AdminHeaderLink } from 'public';
import { VFC } from 'react';
import styles from './Header.module.scss';
import { Box, Grid, GridItem, Icon } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

const AdminHeader: VFC = () => {
  return (
    <Box bg="gray.500">
      <Box h="4em" borderBottom="white">
        <AdminHeaderText />
      </Box>
      <hr />
      <AdminHeaderLink />
    </Box>
  );
};

export default AdminHeader;
