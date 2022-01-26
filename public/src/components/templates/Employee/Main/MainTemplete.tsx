import React, { VFC } from 'react';
import {
  MyTaskBtn,
  AllTaskBtn,
  AllTaskBox,
  MyTaskBox,
  TitleText,
} from 'public';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const EmployeeTemplate: VFC = () => {
  return (
    <div>
      <TitleText />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            bg="green.300"
            _selected={{ color: 'white', bg: 'green.400' }}
            borderTopLeftRadius="0"
            borderTopRightRadius="0"
          >
            <MyTaskBtn />
          </Tab>
          <Tab
            bg="green.300"
            _selected={{ color: 'white', bg: 'green.400' }}
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
    </div>
  );
};

export default EmployeeTemplate;
