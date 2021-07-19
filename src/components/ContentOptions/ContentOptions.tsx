import { Shield, Warranty } from '@base/icons'
import { Box, Flex, Text, chakra } from '@chakra-ui/react'

const ContentOptions = ({ warranty, accepts_mercadopago }) => {
  return (
    <Box>
      {warranty && (
        <Flex mt={6}>
          <Warranty boxSize={5} mr={2} color="#00000073" />
          <Text fontSize="sm" color="gray.500">
            {warranty}
          </Text>
        </Flex>
      )}
      {accepts_mercadopago && (
        <Flex mt={4}>
          <Shield boxSize={5} mr={2} color="#00000073" />
          <Text fontSize="sm" color="gray.500">
            <chakra.span color="brand.300">Compra Protegida</chakra.span>, recibí el producto que
            esperabas o te devolvemos tu dinero.
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default ContentOptions
