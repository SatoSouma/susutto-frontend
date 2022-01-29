import { VFC, useRef } from 'react';
import { Header, AdminTaskList, UserIcon } from 'public';
import { Box, Button, Text } from '@chakra-ui/react';
import breakpoints from 'styles/mediaQuery';

const DepartmentListTemplete: VFC = () => {
  return (
    <>
      <Text fontSize={[20, 100]}>これはテストです</Text>
      <Button>
        <UserIcon />
      </Button>
    </>
  );
};

export default DepartmentListTemplete;
