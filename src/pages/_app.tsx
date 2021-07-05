import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Header from '@base/components/Header'
import Footer from '@base/components/Footer'
import '@base/styles/globals.scss'
import classes from '@base/styles/Main.module.scss'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#fff159',
    },
    black: {
      300: '#333',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <main className={classes.Main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
