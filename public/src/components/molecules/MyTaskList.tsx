import { VFC } from 'react';
import {
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { CompleteBtn } from 'public';

type props = {
  id: number;
  taskName: string;
  taskDetail: string;
  deadLine: string;
  onPutClick: Function;
};

const MyTaskList: VFC<props> = (props: props) => {
  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem
          w="300px"
          bg="white"
          borderRadius="10px"
          m="auto"
          marginBottom="1em"
          shadow="base"
        >
          <AccordionButton _focus={{ boxShadow: 'none' }}>
            <Box flex="1" textAlign="left">
              <Box color="gray.700">{props.taskName}</Box>
              <Box color="gray.500" fontSize="0.5em">
                {props.deadLine}
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4} fontSize="20">
            {props.taskDetail}
            <CompleteBtn id={props.id} onPutClick={props.onPutClick} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default MyTaskList;
