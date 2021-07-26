import { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'

interface ContentHeaderSubtitleProps {
  condition: string
  sold_quantity: number
}

const ContentHeaderSubtitle: FC<ContentHeaderSubtitleProps> = ({ condition, sold_quantity }) => {
  return (
    <Box d="flex" alignItems="center">
      <Text fontSize="xs" color="gray.500">
        {condition === 'new' ? 'Nuevo' : 'Usado'}
      </Text>
      <Text fontSize="xs" color="gray.500" marginLeft={1}>
        {sold_quantity && `| ${sold_quantity.toLocaleString('de')} Vendidos`}
      </Text>
    </Box>
  )
}

export default ContentHeaderSubtitle
