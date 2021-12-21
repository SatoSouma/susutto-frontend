import { VFC } from 'react';
import {
  Button,
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { CompleteBtn, HandleBtn } from '../../entory_point';
import styles from './TaskList.module.scss';

const TaskList: VFC = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section Task
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          <HandleBtn />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default TaskList;
