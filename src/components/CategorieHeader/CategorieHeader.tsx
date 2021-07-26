import { FC } from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'

interface CategorieHeaderProps {
  name: string
  picture: string
}

const CategorieHeader: FC<CategorieHeaderProps> = ({ name, picture }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      borderRadius="10px"
      p={5}
      marginBottom={5}
    >
      <Heading as="h1" size="lg" paddingLeft={5}>
        {name}
      </Heading>
      <Image boxSize="170px" objectFit="cover" src={picture} alt={name} />
    </Box>
  )
}

export default CategorieHeader
