import { Button, Grid, Heading, GridItem, Box } from '@chakra-ui/react';
import { TaskState } from 'public';
import { props } from 'types/propsTypes';
import { useSelector } from 'react-redux';

const TaskFix: React.VFC<props> = (props: props) => {
  const taskState = new TaskState();

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
          {useSelector(taskState.taskFix)}
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10"></GridItem>
        <GridItem colSpan={2} mr="10" ml="10"></GridItem>
        <GridItem colSpan={2} mr="10" ml="10"></GridItem>
        <GridItem colSpan={2} textAlign="center">
          <Button colorScheme="blue">修正</Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TaskFix;
