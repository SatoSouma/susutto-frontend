import React, { VFC } from 'react';
import {
  MyTaskBtn,
  AllTaskBtn,
  AllTaskBox,
  MyTaskBox,
  TitleText,
} from 'public';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

const EmployeeTemplate: VFC = () => {
  return (
    <Box>
      <TitleText />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            bg="LimeGreen.100"
            borderRightColor="white"
            _selected={{ color: 'white', bg: 'LimeGreen.200' }}
            borderTopLeftRadius="0"
            borderTopRightRadius="0"
          >
            <MyTaskBtn />
          </Tab>
          <Tab
            bg="LimeGreen.100"
            borderLeftColor="white"
            _selected={{ color: 'white', bg: 'LimeGreen.200' }}
            borderTopLeftRadius="0"
            borderTopRightRadius="0"
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
      {/* <Footer /> */}
    </Box>
  );
};

export default EmployeeTemplate;
