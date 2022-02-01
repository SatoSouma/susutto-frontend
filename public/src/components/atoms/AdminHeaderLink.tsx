import { VFC } from 'react';
import NextLink from 'next/link';
import styles from './HeaderLink.module.scss';
import { Box, Grid, GridItem, Link } from '@chakra-ui/react';

const AdminHeaderLink: VFC = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" height="50px" color="gray.600">
        <GridItem colSpan={2} textAlign="center">
          <Link href="/admin/taskList">Dashboard</Link>
        </GridItem>
        <GridItem colSpan={2} textAlign="center">
          <Link href="/admin/taskAdd">Forms</Link>
        </GridItem>
        <GridItem colSpan={2} textAlign="center">
          <Link href="/admin/departmentList">Attendance status</Link>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AdminHeaderLink;
