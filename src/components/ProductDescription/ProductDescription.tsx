import { FC } from 'react'
import { Divider, Text } from '@chakra-ui/react'

interface ProductDescriptionProps {
  productDescription: ProductProps
}

interface ProductProps {
  plain_text: string
}

const ProductDescription: FC<ProductDescriptionProps> = ({ productDescription }) => {
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
