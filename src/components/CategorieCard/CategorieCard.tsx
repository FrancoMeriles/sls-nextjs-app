import { FC } from 'react'
import { LinkBox, LinkOverlay, Text, chakra } from '@chakra-ui/react'
import NextLink from 'next/link'

// Utils
import { getRandomColor } from '@base/utils'

interface CategorieCardProps {
  id: string
  name: string
}

const CategorieCard: FC<CategorieCardProps> = ({ id, name }) => {
  return (
    <LinkBox boxShadow="sm" p={4} rounded="md" bg="white" pos="relative" minHeight="100px">
      <NextLink href={`categorie/${id}/products?page=1`} passHref>
        <LinkOverlay>
          <Text fontWeight="400">{name}</Text>
          <chakra.span
            bg={getRandomColor()}
            w="98%"
            h="2px"
            pos="absolute"
            left={0}
            bottom={0}
            right={0}
            margin="auto"
            borderBottomLeftRadius="lg"
            borderBottomRightRadius="lg"
          />
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}

export default CategorieCard
