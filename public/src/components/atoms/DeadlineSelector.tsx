import { Input, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'public';

const DeadlineSelector: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  return (
    <>
      <Text textAlign="center" color="gray.600">
        期限選択
      </Text>
      <Input
        type="date"
        boxShadow="inner"
        color="gray.400"
        onChange={(e) =>
          dispatch(taskAction.setDeadLine(e.target.value as string))
        }
      />
    </>
  );
};

export default DeadlineSelector;
