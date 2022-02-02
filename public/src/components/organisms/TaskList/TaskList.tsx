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

const TaskList: VFC = () => {
  return (
    <Box
      border="1px"
      borderRadius="5px"
      h="630"
      borderColor="gray.300"
      boxShadow="lg"
      bg="white"
      color="gray.500"
    >
      <Tabs isFitted variant="enclosed">
        <TabList
          mb="1em"
          color="white"
          bg="skyBlue.100"
          borderRadius="5px"
          h="50"
        >
          <Tab
            _focus={{ boxShadow: 'none', color: 'white' }}
            _selected={{
              color: 'skyBlue.100',
              borderColor: 'white',
              bg: 'white',
            }}
          >
            <Text fontWeight="bold">Doing</Text>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _selected={{
              color: 'skyBlue.100',
              borderColor: 'white',
              bg: 'white',
            }}
          >
            <Text fontWeight="bold">Todo</Text>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _selected={{
              color: 'skyBlue.100',
              borderColor: 'white',
              bg: 'white',
            }}
          >
            <Text fontWeight="bold">NotAchieved</Text>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _selected={{
              color: 'skyBlue.100',
              borderColor: 'white',
              bg: 'white',
            }}
          >
            <Text fontWeight="bold">Done</Text>
          </Tab>
        </TabList>
        <Box h="550">
          <TabPanels>
            <TabPanel maxHeight="550" minHeight="100" overflow="auto">
              <AdminTaskList color="LimeGreen" />
              <AdminTaskList color="LimeGreen" />
              <AdminTaskList color="skyBlue" />
              <AdminTaskList color="vividRed" />
              <AdminTaskList color="skyBlue" />
              <AdminTaskList color="LimeGreen" />
              <AdminTaskList color="LimeGreen" />
              <AdminTaskList color="LimeGreen" />
              <AdminTaskList color="skyBlue" />
              <AdminTaskList color="vividRed" />
              <AdminTaskList color="vividRed" />
              <AdminTaskList color="skyBlue" />
            </TabPanel>
            <TabPanel maxHeight="550" minHeight="100" overflow="auto">
              <AdminTaskList color="LimeGreen" />
              <AdminTaskList color="LimeGreen" />
            </TabPanel>
            <TabPanel maxHeight="550" minHeight="100" overflow="auto">
              <AdminTaskList color="skyBlue" />
              <AdminTaskList color="LimeGreen" />
            </TabPanel>
            <TabPanel maxHeight="550" minHeight="100" overflow="auto">
              <AdminTaskList color="vividRed" />
              <AdminTaskList color="skyBlue" />
              <AdminTaskList color="LimeGreen" />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default TaskList;
