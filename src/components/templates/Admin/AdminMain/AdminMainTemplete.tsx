import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import {
  AdminHeaderText,
  AttendBtn,
  DashboardBtn,
  FormBtn,
  HeaderBar,
  LoginBackBtn,
} from 'src';

import { useSelector } from 'react-redux';
import { TaskState } from 'src';
import { TaskAdd, TaskList } from 'src';
import TaskFix from '../TaskFix/TaskFix';
import { props } from 'types/propsTypes';
import { useAdminMainTemplete } from './useAdminMainTemplete';

const AdminMainTemplete: React.VFC<props> = ({ socket }) => {
  const taskState = new TaskState();
  const rePage = useSelector(taskState.page);
  const [signOut] = useAdminMainTemplete();

  let currentPage: any;

  switch (rePage) {
    case 'list':
      currentPage = <TaskList />;
      break;

    case 'add':
      currentPage = <TaskAdd socket={socket} />;
      break;

    case 'attend':
      currentPage = <Text>attend</Text>;
      break;

    case 'fix':
      currentPage = <TaskFix socket={socket} />;
      break;

    default:
      currentPage = <Text>error</Text>;
      break;
  }

  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={1}>
          <AdminHeaderText />
        </GridItem>
        <GridItem colSpan={4} borderBottom="1px" borderColor="gray.100">
          <HeaderBar />
        </GridItem>
        <GridItem colSpan={1} h="730" borderRight="1px" borderColor="gray.100">
          <Grid templateColumns="repeat(1, 1fr)" textAlign="center">
            <GridItem colSpan={1} mt="5">
              <DashboardBtn />
            </GridItem>
            <GridItem colSpan={1} mt="5">
              <FormBtn />
            </GridItem>
            <GridItem colSpan={1} mt="5">
              <AttendBtn />
            </GridItem>
            <GridItem colSpan={1} mt="20">
              <LoginBackBtn signOut={signOut} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          colSpan={4}
          pt="10"
          pr="10"
          pl="10"
          bg="gray.100"
          boxShadow="inner"
          border="2px"
          borderColor="gray.200"
        >
          {currentPage}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AdminMainTemplete;
