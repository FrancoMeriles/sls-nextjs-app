import { Box, Button, Text } from '@chakra-ui/react'

// Context and Actions
import { useDispatchFavorite, useFavorite } from '@base/contexts/Favorite'
import { addFavorite, removeFavorite } from '@base/contexts/actions/favorites'

// Icons
import { HeartFull, HeartOutline } from '@base/icons'

// Utils
import { checkIfProductExistInFavorite } from '@base/utils'

const ProductActions = ({ available_quantity, productId, product }) => {
  const favorites = useFavorite()
  const dispatch = useDispatchFavorite()
  return (
    <Box mt={4}>
      <Text fontSize="xs" color="black" fontWeight="semibold">
        {available_quantity > 0 ? 'Stock disponible' : 'Sin stock'}
      </Text>
      <Button w="100%" size="lg" colorScheme="brand" mt={2}>
        Comprar ahora
      </Button>

      {checkIfProductExistInFavorite(favorites, productId) ? (
        <Button
          w="100%"
          size="lg"
          mt={2}
          onClick={() => dispatch(removeFavorite(productId))}
          rightIcon={<HeartFull />}
          colorScheme="brand"
          variant="outline"
        >
          Eliminar de favoritos
        </Button>
      ) : (
        <Button
          w="100%"
          size="lg"
          mt={2}
          onClick={() => dispatch(addFavorite(product))}
          rightIcon={<HeartOutline />}
          colorScheme="brand"
          variant="outline"
        >
          Agregar a favoritos
        </Button>
      )}
    </Box>
  )
}

export default ProductActions
