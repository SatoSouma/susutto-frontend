import { Icon } from '@chakra-ui/react';

type props = {
  size: string;
  color: string;
};

const HamburgerIcon: React.VFC<props> = (props: props) => {
  return (
    <Icon
      viewBox="0 0 448 512"
      aria-hidden="true"
      data-prefix="fas"
      data-icon="bars"
      color={props.color}
      boxSize={props.size}
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      ></path>
    </Icon>
  );
};

export default HamburgerIcon;
