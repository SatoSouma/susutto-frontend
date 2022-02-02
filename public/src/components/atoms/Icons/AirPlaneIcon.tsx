import { Icon } from '@chakra-ui/react';

const AirPlaneIcon: React.VFC = () => {
  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="paper-plane"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
      ></path>
    </Icon>
  );
};

export default AirPlaneIcon;
