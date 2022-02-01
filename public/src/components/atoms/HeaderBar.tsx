import { Box, Input, Button } from '@chakra-ui/react';
import { UserIcon, HamburgerIcon } from 'public';

const HeaderBar = () => {
  return (
    <Box bg="skyBlue.100" h="60px" boxShadow="2xl" textAlign="right">
      <Input
        placeholder="serch..."
        css={{
          '&::placeholder': { color: 'white' },
        }}
        color="white"
        w="400px"
        bg="skyBlue.300"
        ml="100px"
        borderColor="skyBlue.300"
        mt="2"
        borderRadius="0"
      />
      <Button
        bg="skyBlue.100"
        _active={{ bg: 'skyBlue.100' }}
        _hover={{ bg: 'skyBlue.100' }}
        _focus={{ boxShadow: 'none', bg: 'skyBlue.100' }}
      >
        <HamburgerIcon size={'4'} color={'white'} />
      </Button>
    </Box>
  );
};

export default HeaderBar;
