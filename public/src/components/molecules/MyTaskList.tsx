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
import { CompleteBtn } from 'public';
import styles from './MyTaskList.module.scss';

const MyTaskList: VFC = () => {
  return (
    <div className={styles.tasklist}>
      <Accordion allowToggle>
        <AccordionItem
          w="300px"
          bg="white"
          borderRadius="10px"
          m="auto"
          marginBottom="1em"
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <div className={styles.taskText}>Section Task</div>
                <div className={styles.deadLine}>期限</div>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
            <CompleteBtn />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MyTaskList;
