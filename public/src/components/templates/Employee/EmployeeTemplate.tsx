import React, { VFC } from 'react';
import { MyTaskBtn, AllTaskBtn, TaskList } from '../../entory_point';
import { TaskBtnGroup } from '../../entory_point';
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
            <p>あなたのお仕事</p>
          </TabPanel>
          <TabPanel>
            <TaskList />
            <TaskList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default EmployeeTemplate;
