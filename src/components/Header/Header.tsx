import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useFavorite } from '@base/contexts/Favorite'
import { useRouter } from 'next/router'

import {
  Box,
  Flex,
  Badge,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { HeartOutline } from '@base/icons'
import Search from '@base/components/Search'
import { SearchIcon } from '@chakra-ui/icons'

const Header = (props) => {
  const favorites = useFavorite()
  const router = useRouter()

  const gotoFavorite = () => {
    router.push('/favorites')
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const showSearch = () => (isOpen ? onClose() : onOpen())
  const cancelRef = React.useRef()

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="brand.100"
      color="black.300"
      {...props}
    >
      <Flex>
        <Link href="/">
          <a>
            <Image src="/assets/img/logoMeli.png" alt="Mercado Libre" width="134" height="34" />
          </a>
        </Link>
      </Flex>

      <Box display={{ base: 'none', md: 'block' }}>
        <Search onClose={onClose} />
      </Box>
      <Flex>
        <Box display={{ base: 'block', md: 'none' }} cursor="pointer" onClick={showSearch} mr={5}>
          <SearchIcon boxSize={5} />
        </Box>
        <Box pos="relative" cursor="pointer" onClick={gotoFavorite}>
          <HeartOutline boxSize={5} />
          <Badge colorScheme="red" borderRadius="50px" pos="absolute" right="-11" top="-2">
            {favorites.length}
          </Badge>
        </Box>
      </Flex>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>
              <Search onClose={onClose} />
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  )
}

export default Header
