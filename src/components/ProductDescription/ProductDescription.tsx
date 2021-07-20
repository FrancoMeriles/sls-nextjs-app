import { Divider, Text } from '@chakra-ui/react'

const ProductDescription = ({ productDescription }) => {
  return (
    <>
      <Divider orientation="horizontal" />
      <Text fontSize="2xl" m="20px 0">
        Descripción
      </Text>
      <Text fontSize="lg" color="#666" lineHeight="35px">
        {productDescription.plain_text}
      </Text>
    </>
  )
}

export default ProductDescription
