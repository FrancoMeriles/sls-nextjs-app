import { FC } from 'react'
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
  chakra,
} from '@chakra-ui/react'
import { Devolutions, Truck, Money, Calendar, Position } from '@base/icons'
import 'dayjs/locale/es'
import dayjs from 'dayjs'
import { getPriceFormatted } from '@base/utils'
import { useZipCode } from '@base/contexts/ZipCode'
dayjs.locale('es')

interface ContentShippingOptionsProps {
  options: OptionsProps
}

interface OptionsProps {
  find: any
  display: string
  shipping_option_type: string
  name: string
  cost: number
  base_cost: number
  estimated_delivery_time: {
    date: string
  }
}

const ContentShippingOptions: FC<ContentShippingOptionsProps> = ({ options }) => {
  const zipCode = useZipCode()
  const modalDevolution = useDisclosure()
  const modalDeliveryMethod = useDisclosure()
  const bestShippingOption = options.find(({ display }) => display === 'recommended')
  const allwaysShippingOption = options.find(
    ({ shipping_option_type }) => shipping_option_type === 'agency'
  )
  const bestArrive = dayjs(bestShippingOption.estimated_delivery_time.date).format(
    'dddd D [de] MMMM'
  )
  const agencyArrive = dayjs(allwaysShippingOption.estimated_delivery_time.date).format(
    'dddd D [de] MMMM'
  )
  return (
    <Box>
      <Flex m="15px 0">
        <Box w="30px" d="flex" alignItems="top" pt={1}>
          <Truck />
        </Box>
        <Box>
          {bestShippingOption.cost === 0 ? (
            <Text fontSize="sm" color="brand.200">
              Llega gratis <chakra.span fontWeight="semibold">el {bestArrive}</chakra.span>
            </Text>
          ) : (
            <Text fontSize="sm">
              Llega{' '}
              <chakra.span fontWeight="semibold" color="brand.200">
                el {bestArrive}
              </chakra.span>{' '}
              por {getPriceFormatted(bestShippingOption.base_cost)}
            </Text>
          )}
          <Text fontSize="xs" color="gray.500">
            Beneficio Mercado Puntos
          </Text>

          <Button
            onClick={modalDeliveryMethod.onOpen}
            size="xs"
            colorScheme="brand"
            variant="link"
            mt={2}
          >
            Ver más formas de entrega
          </Button>
        </Box>
      </Flex>
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

          <Button
            onClick={modalDevolution.onOpen}
            size="xs"
            colorScheme="brand"
            variant="link"
            mt={2}
          >
            Conocer más
          </Button>
        </Box>
      </Flex>
      <Modal
        isOpen={modalDevolution.isOpen}
        onClose={modalDevolution.onClose}
        size="4xl"
        isCentered
      >
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
            <Button variant="ghost" onClick={modalDevolution.onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={modalDeliveryMethod.isOpen}
        onClose={modalDeliveryMethod.onClose}
        size="4xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent padding={6}>
          <ModalHeader>
            <Heading as="h3" size="lg">
              Opciones de envío y retiro
            </Heading>
          </ModalHeader>
          <ModalCloseButton color="brand.300" />
          <ModalBody p={8}>
            <Text fontSize="lg" fontWeight="semibold">
              Calculamos los costos y tiempos para esta dirección:
            </Text>
            <Flex marginTop={4} alignItems="center" p={5} bg="gray.100" borderRadius={5}>
              <Position color="brand.300" />
              <Text color="gray.500" ml={5} fontSize="sm">
                {zipCode && `CP: ${zipCode}`}
              </Text>
            </Flex>

            <Box marginTop={10} borderBottom="solid 1px #edf2f6">
              <Text fontSize="lg" fontWeight="semibold">
                Recibir compra
              </Text>
              <Flex justifyContent="space-between" p="30px 0">
                <Text>
                  Llega el <chakra.b>{bestArrive}</chakra.b> a tu dirección
                </Text>
                {bestShippingOption.cost === 0 ? (
                  <Text fontSize="md" color="brand.200">
                    Gratis
                  </Text>
                ) : (
                  <Text fontSize="md">{getPriceFormatted(bestShippingOption.base_cost)}</Text>
                )}
              </Flex>
            </Box>

            <Box marginTop={10} borderBottom="solid 1px #edf2f6">
              <Text fontSize="lg" fontWeight="semibold">
                Retirar compra
              </Text>
              <Flex justifyContent="space-between" p="30px 0">
                <Text>
                  Retiralo a partir del <chakra.b>{agencyArrive}</chakra.b> en correos
                </Text>
                {allwaysShippingOption.cost === 0 ? (
                  <Text fontSize="md" color="brand.200">
                    Gratis
                  </Text>
                ) : (
                  <Text fontSize="md">{getPriceFormatted(allwaysShippingOption.base_cost)}</Text>
                )}
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={modalDeliveryMethod.onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ContentShippingOptions
