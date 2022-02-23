import {
  Box,
  Button,
  Grid,
  Link,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useAdminLogin } from './useAdminLogin';
import styles from './Login.module.scss';

const AdminLoginTemplate: React.VFC = () => {
  const [
    onChengePass,
    onChengeUserId,
    authentication,
    handleClick,
    userId,
    pass,
    show,
    error,
    isLargerThan480,
  ] = useAdminLogin();

  return (
    <Box h="800">
      <Text fontWeight="bold" mt="5" textAlign="center" color="red">
        {error}
      </Text>
      <Box mt="10" mb="5" textAlign="center">
        <Heading color="gray.600">管理者ログイン</Heading>
      </Box>
      <Box>
        <Grid
          templateColumns="repeat(2, 1fr)"
          h="330"
          border="2px"
          borderColor="gray.200"
          boxShadow="lg"
          bg="white"
          className={styles.grid}
          borderRadius={10}
          color="gray.600"
        >
          <GridItem colSpan={2} mt="5" textAlign="center">
            <Text fontSize="20" fontWeight="bold">
              ログインID
            </Text>
          </GridItem>
          <GridItem colSpan={2} className={styles.gridItem}>
            <Input
              placeholder="Enter loginId"
              onChange={(e) => onChengeUserId(e.target.value)}
            ></Input>
          </GridItem>
          <GridItem colSpan={2} textAlign="center" mt="5">
            <Text fontSize="20" fontWeight="bold">
              パスワード
            </Text>
          </GridItem>
          <GridItem colSpan={2} className={styles.gridItem}>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={(e) => onChengePass(e.target.value)}
              ></Input>
              <InputRightElement width="4.5rem">
                <Button size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2} mt="5" textAlign="center">
            <Button
              bg="skyBlue.300"
              color="white"
              _hover={{ bg: 'skyBlue.200' }}
              _focus={{ boxShadow: 'none' }}
              onClick={() => authentication()}
            >
              Login
            </Button>
          </GridItem>
          <GridItem colSpan={2} mb="5" mt="5" textAlign="center">
            <Link color="skyBlue.300" href="./login">
              一般ログインはこちら
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminLoginTemplate;
