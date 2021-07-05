import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex pt={10} pb={10} align="center" justify="center">
      <Text color="gray.300" fontSize="xs">
        Copyright © 1999-2021 MercadoLibre S.R.L.
      </Text>
    </Flex>
  )
}

export default Footer
