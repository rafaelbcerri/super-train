import Head  from 'next/head'
import '../styles/globals.css'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Testando o title</title>
      </Head>
      <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
      </MuiThemeProvider>
    </div>
  )
}

export default MyApp
