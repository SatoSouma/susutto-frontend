import { Grid, GridItem, Input, Select, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'public';

const DeadlineSelector: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  const optionHour = [];
  const optionMinutes = [];

  for (let i = 0; i < 24; i++) {
    optionHour.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  for (let i = 0; i < 61; i++) {
    i < 10
      ? optionMinutes.push(<option key={i} value={`0${i}`}>{`0${i}`}</option>)
      : optionMinutes.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
  }

  return (
    <Grid templateColumns="repeatrepeat(7, 1fr)">
      <GridItem colSpan={9}>
        <Text textAlign="center" color="gray.600">
          期限
        </Text>
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          type="date"
          boxShadow="inner"
          color="gray.400"
          onChange={(e) =>
            dispatch(taskAction.setDeadLineDay(e.target.value as string))
          }
        />
      </GridItem>
      <GridItem colSpan={1}></GridItem>
      <GridItem colSpan={1}>
        <Select
          boxShadow="base"
          border="1px"
          borderRadius="10"
          borderColor="gray.300"
          onChange={(e) =>
            dispatch(taskAction.setDeadLineHour(e.target.value as string))
          }
        >
          {optionHour}
        </Select>
      </GridItem>
      <GridItem colSpan={1}>
        <Text pt="2" color="gray.600">
          時
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <Select
          boxShadow="base"
          border="1px"
          borderRadius="10"
          borderColor="gray.300"
          onChange={(e) =>
            dispatch(taskAction.setDeadLineMinutes(e.target.value as string))
          }
        >
          {optionMinutes}
        </Select>
      </GridItem>
      <GridItem colSpan={1}>
        <Text pt="2" color="gray.600">
          分
        </Text>
      </GridItem>
    </Grid>
  );
};

export default DeadlineSelector;
