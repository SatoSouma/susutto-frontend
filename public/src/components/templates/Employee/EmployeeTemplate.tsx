import React, { VFC } from 'react';
import {
  MyTaskBtn,
  AllTaskBtn,
  AllTaskBox,
  MyTaskBox,
} from '../../entory_point';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const EmployeeTemplate: VFC = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <MyTaskBtn />
          </Tab>
          <Tab>
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
    </div>
  );
};

export default EmployeeTemplate;
