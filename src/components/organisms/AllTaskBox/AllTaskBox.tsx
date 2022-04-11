import { AllTaskList, AllTaskText, TaskState } from 'src';
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { useAllTaskBox } from './useAllTaskBox';
import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { taskType } from 'types/reduxTypes';

type props = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
};
moment.tz.setDefault('Asia/Tokyo');

const AllTaskBox: VFC<props> = (props: props) => {
  const [onPutClick] = useAllTaskBox(props.socket);
  const taskState = new TaskState();
  const result = useSelector(taskState.taskInfo);

  return !!result ? (
    <Box boxShadow="lg" borderRadius="10px">
      <Box
        paddingBottom="1em"
        paddingTop="2em"
        bg="cream.100"
        borderRadius="10px"
        minHeight="200"
        maxHeight="480"
        overflow="auto"
      >
        {result.allTask.map((val: taskType) => {
          console.log(val);
          return (
            <AllTaskList
              key={val.id}
              id={val.id}
              taskName={val.taskName}
              taskDetail={val.taskDetail}
              deadLine={moment(val.deadLine).format('YYYY/MM/DD HH:mm')}
              onPutClick={onPutClick}
            />
          );
        })}
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default AllTaskBox;
