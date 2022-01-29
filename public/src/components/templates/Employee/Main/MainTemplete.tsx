import React, { VFC } from 'react';
import {
  MyTaskBtn,
  AllTaskBtn,
  AllTaskBox,
  MyTaskBox,
  EmployeeHeader,
  Footer,
} from 'public';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

const EmployeeTemplate: VFC = () => {
  return (
    <Box>
      <Box h="743">
        <EmployeeHeader />
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
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
          <TabPanels>
            <TabPanel>
              <MyTaskBox />
            </TabPanel>
            <TabPanel>
              <AllTaskBox />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Footer />
    </Box>
  );
};

export default EmployeeTemplate;
