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

// Icons
import { Position, Truck } from '@base/icons'

// Utils
import { getPriceFormatted } from '@base/utils'

// Contexts
import { useZipCode } from '@base/contexts/ZipCode'

// Libraries
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es')

interface BestShippingOptionProps {
  bestShippingOption: ShippingOption
  allwaysShippingOption: ShippingOption
}

interface ShippingOption {
  display: string
  shipping_option_type: string
  name: string
  cost: number
  base_cost: number
  estimated_delivery_time: {
    date: string
  }
}

const BestShippingOption: FC<BestShippingOptionProps> = ({
  bestShippingOption,
  allwaysShippingOption,
}) => {
  const zipCode = useZipCode()
  const { onOpen, isOpen, onClose } = useDisclosure()

  const bestArrive = dayjs(bestShippingOption.estimated_delivery_time.date).format(
    'dddd D [de] MMMM'
  )
  const agencyArrive = dayjs(allwaysShippingOption.estimated_delivery_time.date).format(
    'dddd D [de] MMMM'
  )

  return (
    <>
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

          <Button onClick={onOpen} size="xs" colorScheme="brand" variant="link" mt={2}>
            Ver más formas de entrega
          </Button>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
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
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BestShippingOption
