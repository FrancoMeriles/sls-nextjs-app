import { useEffect, useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from '@base/styles/theme'
import Header from '@base/components/Header'
import Footer from '@base/components/Footer'
import '@base/styles/globals.scss'
import classes from '@base/styles/Main.module.scss'
import { useRouter } from 'next/router'
import { Spinner } from '@chakra-ui/react'
import { FavoriteProvider } from '@base/contexts/Favorite'

function MyApp({ Component, pageProps }) {
  const [loading, setLoding] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setLoding(true)
    }
    const handleStop = () => {
      setLoding(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <FavoriteProvider>
      <ChakraProvider theme={theme}>
        {loading && (
          <Box className={classes.Spinner}>
            <Spinner size="xl" color="brand.100" thickness="3px" />
          </Box>
        )}
        <Header />
        <main className={classes.Main}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ChakraProvider>
    </FavoriteProvider>
  )
}

export default MyApp
