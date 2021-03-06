import { extendTheme } from '@chakra-ui/react'

const Container = {
  baseStyle: {
    maxW: '1200px',
  },
}

const theme = extendTheme({
  components: {
    Container,
  },
  colors: {
    brand: {
      100: '#fff159',
      200: '#00a650',
      300: '#3483fa',
      500: '#3483fa',
      600: '#3483fa',
      gray: '#f5f5f5',
    },
    black: {
      300: '#333',
    },
    test: '#3483fa',
  },
})

export default theme
