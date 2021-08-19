import {
  Box,
  Heading,
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react'

// Icons
import { Devolutions, Money, Calendar } from '@base/icons'

const DevolutionsShippingOptions = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <>
      <Flex m="15px 0">
        <Box w="30px" d="flex" alignItems="top" pt={1}>
          <Devolutions color="brand.200" />
        </Box>
        <Box>
          <Text color="brand.200" fontSize="sm">
            Devolución gratis
          </Text>
          <Text fontSize="xs" color="gray.500">
            Tenés 30 días desde que lo recibís.
          </Text>

          <Button onClick={onOpen} size="xs" colorScheme="brand" variant="link" mt={2}>
            Conocer más
          </Button>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent padding={6}>
          <ModalHeader>
            <Heading as="h3" size="lg">
              Podés devolver este producto gratis. ¡No importa el motivo!
            </Heading>
          </ModalHeader>
          <ModalCloseButton color="brand.300" />
          <ModalBody p={8}>
            <Flex marginTop={4}>
              <Flex w="60px" alignItems="center">
                <Calendar boxSize={7} />
              </Flex>
              <Box>
                <Text fontSize="md">Tenés 30 días desde que te llega.</Text>
              </Box>
            </Flex>
            <Flex marginTop={8}>
              <Flex w="60px" alignItems="center">
                <Devolutions boxSize={7} />
              </Flex>
              <Box>
                <Text fontSize="md">Podés enviarlo desde tu correo más cercano.</Text>
              </Box>
            </Flex>
            <Flex marginTop={8}>
              <Flex w="60px" alignItems="center">
                <Money boxSize={7} />
              </Flex>
              <Box>
                <Text fontSize="md">
                  Para devolverlo, el producto debe estar tal cual lo recibiste.
                </Text>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DevolutionsShippingOptions
