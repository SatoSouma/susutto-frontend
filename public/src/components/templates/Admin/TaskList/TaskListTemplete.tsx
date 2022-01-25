import { VFC, useRef } from 'react';
import { Header, AdminTaskList } from '../../../entory_point';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from '@chakra-ui/react';

const TaskListTemplete: VFC = () => {
  return (
    <>
      <Header />
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
        <TabPanels>
          <TabPanel>
            <AdminTaskList />
          </TabPanel>
          <TabPanel>
            <AdminTaskList />
            <AdminTaskList />
          </TabPanel>
          <TabPanel>
            <AdminTaskList />
            <AdminTaskList />
          </TabPanel>
          <TabPanel>
            <AdminTaskList />
            <AdminTaskList />
            <AdminTaskList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TaskListTemplete;
