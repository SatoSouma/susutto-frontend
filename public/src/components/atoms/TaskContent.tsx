import { Text, Textarea } from '@chakra-ui/react';

const TaskContent: React.VFC = () => {
  return (
    <>
      <Textarea placeholder="業務内容" boxShadow="inner"></Textarea>
    </>
  );
};

export default TaskContent;
