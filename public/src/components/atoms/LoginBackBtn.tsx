import { Box, Button } from '@chakra-ui/react';

type props = {
  signOut: Function;
};

const LoginBackBtn: React.VFC<props> = ({ signOut }) => {
  return (
    <Button
      bgGradient="linear(to-l, #191970, #0000ff,#00ffff)"
      color="white"
      fontSize="15px"
      w="150px"
      h="45px"
      onClick={() => signOut()}
    >
      LogOut
    </Button>
  );
};

export default LoginBackBtn;
