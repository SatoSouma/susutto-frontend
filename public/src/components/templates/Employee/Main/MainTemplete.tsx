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
import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';

import { props } from 'types/propsTypes';

const EmployeeTemplate: VFC<props> = ({ socket }, ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);
  const color = cookie.color;
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
