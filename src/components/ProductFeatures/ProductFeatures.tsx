import { Box, Grid, Flex, Divider, Text } from '@chakra-ui/react'
import { Check } from '@base/icons'

const ProductFeatures = ({ attributes }) => {
  return (
    <>
      <Divider orientation="horizontal" />
      <Text fontSize="2xl" m="20px 0">
        Características del producto
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} rowGap={8} mt={12}>
        {attributes.map((attribute, id) => (
          <Flex key={id} alignItems="center">
            <Check boxSize={9} bg="brand.gray" borderRadius="50px" mr={2} />
            <Box>
              <Text fontSize="sm" mr={2}>
                {attribute.name}:
              </Text>
              <Text fontSize="sm" fontWeight="semibold">
                {attribute.value_name}
              </Text>
            </Box>
          </Flex>
        ))}
      </Grid>
    </>
  )
}

export default ProductFeatures
