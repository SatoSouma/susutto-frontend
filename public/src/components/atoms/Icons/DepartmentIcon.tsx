import { Box, Icon } from '@chakra-ui/react';

type props = {
  color: string;
};

const DepartmentIcon: React.VFC<props> = (props: props) => {
  return (
    <Box
      bg={`${props.color}.100`}
      height="5"
      width="5"
      borderRadius="5px"
      boxShadow="base"
    />
  );
};

export default DepartmentIcon;
