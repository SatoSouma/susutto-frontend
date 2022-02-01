import { AdminHeaderText, AdminHeaderLink } from 'public';
import { VFC } from 'react';
import styles from './Header.module.scss';
import { Box, Grid, GridItem, Icon } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

const AdminHeader: VFC = () => {
  return (
    <Box bg="white">
      <Box borderBottom="1" borderColor="gray.600" h="50">
        <AdminHeaderText />
      </Box>
      <hr />
      <AdminHeaderLink />
    </Box>
  );
};

export default AdminHeader;
