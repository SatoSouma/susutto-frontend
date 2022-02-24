import { Button, Grid, Heading, GridItem, Box } from '@chakra-ui/react';
import {
  DepartmentSelector,
  TaskTitle,
  DeadlineSelector,
  TaskContent,
} from 'public';
import { useTaskAdd } from './useTaskAdd';
import { props } from 'types/propsTypes';

const TaskAdd: React.VFC<props> = (props: props) => {
  const [onClickSend] = useTaskAdd(props.socket);

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
          <Heading color="gray.600">業務指示作成画面</Heading>
        </GridItem>
        <GridItem colSpan={1} mt="10">
          <DepartmentSelector key={1} />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <TaskTitle />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <DeadlineSelector />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <TaskContent />
        </GridItem>
        <GridItem colSpan={2} textAlign="center">
          <Button
            bg="skyBlue.100"
            color="white"
            w="20"
            onClick={() => onClickSend()}
          >
            作成
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TaskAdd;
