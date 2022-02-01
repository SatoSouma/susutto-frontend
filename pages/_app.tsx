import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import theme from 'styles/theme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../public/redux/reducers';

const Store = createStore(reducer);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
