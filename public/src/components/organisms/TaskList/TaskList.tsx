import { VFC } from 'react';
import { AdminTaskList, TaskState, AdminTabHeader } from 'public';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Box,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { adminTaskTypes } from 'types/reduxTypes';
import moment from 'moment-timezone';
import { useTaskList } from './useTaskList';

moment.tz.setDefault('Asia/Tokyo');

const TaskList: VFC = () => {
  const taskState = new TaskState();
  const result = useSelector(taskState.adminTaskInfo);
  console.log(result);
  const [onClickMove] = useTaskList();

  return !!result ? (
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
              {result.doing.length !== 0 ? (
                <AdminTabHeader />
              ) : (
                <Text color="skyBlue.300">現在進行中の業務はありません。</Text>
              )}

              {result.doing.map((val: adminTaskTypes) => {
                console.log('val');

                val.deadLine = val.deadLine.replace(/T/g, ' ');
                val.deadLine = val.deadLine.replace(/Z/g, ' ');
                return (
                  <AdminTaskList
                    key={val.id}
                    id={val.id}
                    taskName={val.taskName}
                    taskDetail={val.taskDetail}
                    deadLine={moment(val.deadLine).format('YYYY/MM/DD HH:mm')}
                    departmentColor={val.departmentColor}
                    departmentName={val.departmentName}
                    employeeName={val.employeeName}
                    onClickMove={onClickMove}
                  />
                );
              })}
            </TabPanel>
            <TabPanel maxHeight="550" minHeight="100" overflow="auto">
              {result.todo.length !== 0 ? (
                <AdminTabHeader />
              ) : (
                <Text color="skyBlue.300">業務予定はありません。</Text>
              )}
              {result.todo.map((val: adminTaskTypes) => {
                val.deadLine = val.deadLine.replace(/T/g, ' ');
                val.deadLine = val.deadLine.replace(/Z/g, ' ');
                return (
                  <AdminTaskList
                    key={val.id}
                    id={val.id}
                    taskName={val.taskName}
                    taskDetail={val.taskDetail}
                    deadLine={moment(val.deadLine).format('YYYY/MM/DD HH:mm')}
                    departmentColor={val.departmentColor}
                    departmentName={val.departmentName}
                    employeeName={val.employeeName}
                    onClickMove={onClickMove}
                  />
                );
              })}
            </TabPanel>
            <TabPanel maxHeight="550" minHeight="100" overflow="auto">
              {result.noAchieve.length !== 0 ? (
                <AdminTabHeader />
              ) : (
                <Text color="skyBlue.300">未達成業務はありません。</Text>
              )}
              {result.noAchieve.map((val: adminTaskTypes) => {
                val.deadLine = val.deadLine.replace(/T/g, ' ');
                val.deadLine = val.deadLine.replace(/Z/g, ' ');
                return (
                  <AdminTaskList
                    key={val.id}
                    id={val.id}
                    taskName={val.taskName}
                    taskDetail={val.taskDetail}
                    deadLine={moment(val.deadLine).format('YYYY/MM/DD HH:mm')}
                    departmentColor={val.departmentColor}
                    departmentName={val.departmentName}
                    employeeName={val.employeeName}
                    onClickMove={onClickMove}
                  />
                );
              })}
            </TabPanel>
            <TabPanel maxHeight="550" minHeight="100" overflow="auto">
              {result.done.length !== 0 ? (
                <AdminTabHeader />
              ) : (
                <Text color="skyBlue.300">達成済み業務はありません。</Text>
              )}
              {result.done.map((val: adminTaskTypes) => {
                val.deadLine = val.deadLine.replace(/T/g, ' ');
                val.deadLine = val.deadLine.replace(/Z/g, ' ');
                return (
                  <AdminTaskList
                    key={val.id}
                    id={val.id}
                    taskName={val.taskName}
                    taskDetail={val.taskDetail}
                    deadLine={moment(val.deadLine).format('YYYY/MM/DD HH:mm')}
                    departmentColor={val.departmentColor}
                    departmentName={val.departmentName}
                    employeeName={val.employeeName}
                    onClickMove={onClickMove}
                  />
                );
              })}
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  ) : (
    <></>
  );
};

export default TaskList;
