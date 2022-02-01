import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { AdminHeaderText, AdminTaskList } from 'public';
import AttendBtn from 'public/src/components/atoms/AttendBtn';
import DashboardBtn from 'public/src/components/atoms/DashboardBtn';
import FormBtn from 'public/src/components/atoms/FormBtn';
import HeaderBar from 'public/src/components/atoms/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { work } from 'public';
import { TaskAdd, TaskList } from 'public';

const AdminMainTemplete: React.VFC = () => {
  const dispatch = useDispatch();

  const reWork = useSelector(work);

  let page: any;

  switch (reWork) {
    case 'list':
      page = <TaskList />;
      break;

    case 'add':
      page = <TaskAdd />;
      break;

    case 'attend':
      page = <Text>attend</Text>;
      break;

    default:
      page = <Text>error</Text>;
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
        <GridItem
          colSpan={1}
          boxShadow="2xl"
          h="670"
          borderRight="1px"
          borderColor="gray.100"
        >
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
          </Grid>
        </GridItem>
        <GridItem colSpan={4} pt="6" pr="10" pl="10" bg="gray.100">
          {page}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AdminMainTemplete;
