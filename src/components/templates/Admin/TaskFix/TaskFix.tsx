import { Button, Grid, Heading, GridItem, Box, Text } from '@chakra-ui/react';
import {
  DeadlineSelectorFix,
  DepartmentSelectorFix,
  TaskContentFix,
  TaskTitleFix,
} from 'src';
import { props } from 'types/propsTypes';
import { useTaskFix } from './useTaskFix';

const TaskFix: React.VFC<props> = ({ socket }) => {
  const [onClickTaskUp] = useTaskFix(socket);
  return (
    <Box
      border="1px"
      borderRadius="5px"
      h="630"
      borderColor="gray.300"
      boxShadow="lg"
      bg="white"
      color="gray.500"
    >
      <Grid templateColumns="repeat(2, 1fr)" h="575">
        <GridItem colSpan={1} textAlign="center" mt="10">
          <Heading>業務指示修正画面</Heading>
        </GridItem>
        <GridItem colSpan={1} mt="10">
          <DepartmentSelectorFix />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <TaskTitleFix />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <DeadlineSelectorFix />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <TaskContentFix />
        </GridItem>
        <GridItem colSpan={2} textAlign="center">
          <Button colorScheme="blue" onClick={() => onClickTaskUp()}>
            修正
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TaskFix;
