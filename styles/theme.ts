import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  colors: {
    skyBlue: {
      100: '#2599EF', //下に行くほど暗い色
      200: '#0B1C9D',
      300: '#1b85d1',
    },
    marineProduct: {
      100: '#2599EF', //下に行くほど暗い色
      200: '#0B1C9D',
      300: '#1b85d1',
    },
    agriculturalProduct: {
      100: '#7CE032',
      200: '#43B211',
    },
    livestock: {
      100: '#FF7983',
      200: '#AC0922',
    },
    delicatessen: {
      100: '#ffd700',
    },
    serviceCounter: {
      100: '#ee82ee',
    },
    glossary: {
      100: '#00ffff',
    },
  },
});

export default theme;
