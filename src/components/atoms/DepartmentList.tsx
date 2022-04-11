import { Box, Link } from '@chakra-ui/react';
import HandleBtn from './HandleBtn';

type departments = {
  key: string;
  department: string;
};

const DepartmentList: React.VFC<departments> = (props: departments) => {
  return (
    <Box
      h="100"
      textAlign="center"
      border="1px"
      boxShadow="base"
      borderColor="gray.300"
      marginBottom="1em"
      marginRight="1em"
      marginLeft="1em"
    >
      <Box marginTop="2em">
        <Link href="./taskAdd" fontSize="20">
          {props.department}
        </Link>
      </Box>
    </Box>
  );
};

export default DepartmentList;
