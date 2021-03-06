import { VFC } from 'react';
import { MyTaskList, TaskState } from 'src';
import { Box } from '@chakra-ui/react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { useSelector } from 'react-redux';
import { useMyTaskBox } from './useMyTaskBox';
import moment from 'moment';
import { taskType } from 'types/reduxTypes';

type props = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
};

const MyTaskBox: VFC<props> = (props: props) => {
  const [onPutClick] = useMyTaskBox(props.socket);
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
        {result.myTask.map((val: taskType) => {
          console.log(val);
          return (
            <MyTaskList
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

export default MyTaskBox;
