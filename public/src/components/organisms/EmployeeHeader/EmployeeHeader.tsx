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
import { UserIcon } from 'public';
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import HamburgerIcon from '../../atoms/Icons/HamburgerIcon';
import { useEmployeeHeader } from './useEmployeeHeader';

const EmployeeHeader: VFC = ({}, ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);
  const color = cookie.color;
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
          TaskList
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
