import { VFC } from 'react';
import {
  Button,
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react';
import { HandleBtn } from 'public';
import styles from './AllTaskList.module.scss';

const AllTaskList: VFC = () => {
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
                <Box color="gray.700">Section Task</Box>
                <Box color="gray.500" fontSize="0.5em">
                  期限
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
            <HandleBtn />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AllTaskList;
