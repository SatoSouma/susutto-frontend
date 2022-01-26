import { VFC, useRef } from 'react';
import { Header, AdminTaskList } from 'public';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Box, Text } from '@chakra-ui/react';

const DepartmentListTemplete: VFC = () => {
  const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  });

  return <Text fontSize={[10, 50, 100]}>これはテストです</Text>;
};

export default DepartmentListTemplete;
