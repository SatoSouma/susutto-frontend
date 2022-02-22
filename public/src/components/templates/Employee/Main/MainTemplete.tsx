import React, { VFC } from 'react';
import {
  MyTaskBtn,
  AllTaskBtn,
  AllTaskBox,
  MyTaskBox,
  EmployeeHeader,
  EmployeeFooter,
  TaskState,
} from 'public';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

import { props } from 'types/propsTypes';
import { useSelector } from 'react-redux';

const EmployeeTemplate: VFC<props> = ({ socket }) => {
  const taskState = new TaskState();
  const color = useSelector(taskState.color);
  return (
    <Box>
      <EmployeeHeader />
      <Box h="643">
        <Tabs isFitted variant="enclosed">
          <TabList boxShadow="lg">
            <Tab
              bg={`${color}.100`}
              borderRightColor="white"
              _selected={{ color: 'white', bg: `${color}.200` }}
              borderTopLeftRadius="0"
              borderTopRightRadius="0"
              _focus={{ boxShadow: 'none' }}
            >
              <MyTaskBtn />
            </Tab>
            <Tab
              bg={`${color}.100`}
              borderLeftColor="white"
              _selected={{ color: 'white', bg: `${color}.200` }}
              borderTopLeftRadius="0"
              borderTopRightRadius="0"
              _focus={{ boxShadow: 'none' }}
            >
              <AllTaskBtn />
            </Tab>
          </TabList>
          <TabPanels pt="1em">
            <TabPanel>
              <MyTaskBox socket={socket} />
            </TabPanel>
            <TabPanel>
              <AllTaskBox socket={socket} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <EmployeeFooter />
    </Box>
  );
};

export default EmployeeTemplate;
