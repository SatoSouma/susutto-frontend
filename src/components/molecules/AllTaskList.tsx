import { VFC } from 'react';
import {
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react';
import { HandleBtn } from 'src';

type props = {
  id: number;
  taskName: string;
  taskDetail: string;
  deadLine: string;
  onPutClick: Function;
};

const AllTaskList: VFC<props> = (props: props) => {
  console.log(props);
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
          <Heading>
            <AccordionButton _focus={{ boxShadow: 'none' }}>
              <Box flex="1" textAlign="left">
                <Box color="gray.700">{props.taskName}</Box>
                <Box color="gray.500" fontSize="0.5em">
                  {props.deadLine}
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4} fontSize="20">
            {props.taskDetail}
            <HandleBtn id={props.id} onPutClick={props.onPutClick} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AllTaskList;
