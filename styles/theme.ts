import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  colors: {
    skyBlue: {
      100: '#2599EF', //下に行くほど暗い色
      200: '#0B1C9D',
      300: '#1b85d1',
    },
    LimeGreen: {
      100: '#7CE032',
      200: '#43B211',
    },
    vividRed: {
      100: '#FF7983',
      200: '#AC0922',
    },
    cream: {
      100: '#f7f5e1',
    },
  },
});

export default theme;
