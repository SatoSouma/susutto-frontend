import { VFC } from 'react';
import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';
import {
  Text,
  Button,
  Grid,
  GridItem,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { TaskState, UserIcon } from 'public';
import { RepeatIcon } from '@chakra-ui/icons';
import HamburgerIcon from '../../atoms/Icons/HamburgerIcon';
import { useEmployeeHeader } from './useEmployeeHeader';
import { useSelector } from 'react-redux';

const EmployeeHeader: VFC = () => {
  const taskState = new TaskState();
  const color = useSelector(taskState.color);

  const [signOut] = useEmployeeHeader();
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      textAlign="center"
      bg={`${color}.100`}
      height="100"
      paddingTop="8"
    >
      <GridItem colSpan={1}>
        <Button
          bg={`${color}.100`}
          _active={{ bg: `${color}.100` }}
          _hover={{ bg: `${color}.100` }}
          _focus={{ boxShadow: 'none', bg: `${color}.100` }}
        >
          <UserIcon color={'white'} size={'8'} />
        </Button>
      </GridItem>
      <GridItem colSpan={1}>
        <Text color="white" fontSize="2em" fontWeight="bold">
          ススット
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <Menu>
          <MenuButton
            bg={`${color}.100`}
            _active={{ bg: `${color}.100` }}
            _hover={{ bg: `${color}.100` }}
            _focus={{ boxShadow: 'none', bg: `${color}.100` }}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon color={'white'} size={'8'} />}
          />
          <MenuList>
            <MenuItem
              icon={<RepeatIcon />}
              command="⌘⇧N"
              onClick={() => signOut()}
            >
              サインアウト
            </MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};

export default EmployeeHeader;
