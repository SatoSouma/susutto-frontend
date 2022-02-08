import React, { VFC } from 'react';
import {
  MyTaskBtn,
  AllTaskBtn,
  AllTaskBox,
  MyTaskBox,
  EmployeeHeader,
  EmployeeFooter,
} from 'public';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const EmployeeTemplate: VFC = () => {
  return (
    <Box>
      <EmployeeHeader />
      <Box h="643">
        <Tabs isFitted variant="enclosed">
          <TabList boxShadow="lg">
            <Tab
              bg="LimeGreen.100"
              borderRightColor="white"
              _selected={{ color: 'white', bg: 'LimeGreen.200' }}
              borderTopLeftRadius="0"
              borderTopRightRadius="0"
              _focus={{ boxShadow: 'none' }}
            >
              <MyTaskBtn />
            </Tab>
            <Tab
              bg="LimeGreen.100"
              borderLeftColor="white"
              _selected={{ color: 'white', bg: 'LimeGreen.200' }}
              borderTopLeftRadius="0"
              borderTopRightRadius="0"
              _focus={{ boxShadow: 'none' }}
            >
              <AllTaskBtn />
            </Tab>
          </TabList>
          <TabPanels pt="1em">
            <TabPanel>
              <MyTaskBox />
            </TabPanel>
            <TabPanel>
              <AllTaskBox />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <EmployeeFooter />
    </Box>
  );
};

export default EmployeeTemplate;
