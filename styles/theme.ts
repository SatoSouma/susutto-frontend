import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  colors: {
    skyBlue: {
      100: '#2599EF', //下に行くほど暗い色
      200: '#0B1C9D',
      300: '#1b85d1',
    },
    cream: {
      100: '#fffaf0',
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
      100: '#FEB2B2',
      200: '#FC8181',
    },
    delicatessen: {
      100: '#F6AD55',
      200: '#ED8936',
    },
    serviceCounter: {
      100: '#B794F4',
      200: '#9F7AEA',
    },
    glossary: {
      100: '#4FD1C5',
      200: '#38B2AC',
    },
  },
});

export default theme;
