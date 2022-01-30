import { VFC } from 'react';
import { AdminHeader, AdminTaskList, AdminFooter } from 'public';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Box,
} from '@chakra-ui/react';

const TaskListTemplete: VFC = () => {
  return (
    <>
      <AdminHeader />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <Text fontSize="bold">担当中業務</Text>
          </Tab>
          <Tab>
            <Text>未担当中業務</Text>
          </Tab>
          <Tab>
            <Text>未達成業務</Text>
          </Tab>
          <Tab>
            <Text>達成業務</Text>
          </Tab>
        </TabList>
        <Box h="500">
          <TabPanels>
            <TabPanel maxHeight="500" minHeight="100" overflow="auto">
              <AdminTaskList />
              <AdminTaskList />
              <AdminTaskList />
              <AdminTaskList />
              <AdminTaskList />
              <AdminTaskList />
            </TabPanel>
            <TabPanel maxHeight="500" minHeight="100" overflow="auto">
              <AdminTaskList />
              <AdminTaskList />
            </TabPanel>
            <TabPanel maxHeight="500" minHeight="100" overflow="auto">
              <AdminTaskList />
              <AdminTaskList />
            </TabPanel>
            <TabPanel maxHeight="500" minHeight="100" overflow="auto">
              <AdminTaskList />
              <AdminTaskList />
              <AdminTaskList />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
      <AdminFooter />
    </>
  );
};

export default TaskListTemplete;
