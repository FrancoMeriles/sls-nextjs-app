import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { useZipCode, useDispatchZipCode } from '@base/contexts/ZipCode'
import { setZipCode } from '@base/contexts/actions/zipCode'

import { Position } from '@base/icons'

const ZipCode = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const zipCode = useZipCode()
  const dispatch = useDispatchZipCode()
  const [value, setValue] = React.useState('')

  const handleChange = (e: React.FormEvent<EventTarget>): void => {
    const target = e.target as HTMLInputElement
    setValue(target.value)
  }
  const handleFormSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault()
    if (value) {
      dispatch(setZipCode(value))
    }
    onClose()
  }

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Text
          fontSize="xs"
          fontWeight="500"
          color="#585858"
          ml={2}
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
        >
          <Position boxSize={3} mb="2px" mr={1} />
          {zipCode && `CP: ${zipCode}`}
        </Text>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody p="30px 15px 15px 15px">
          <form onSubmit={handleFormSubmit}>
            <InputGroup borderColor="transparent">
              <Input
                value={value}
                onChange={handleChange}
                variant="outline"
                placeholder="Zipcode"
                size="lg"
                focusBorderColor="gray.100"
                backgroundColor="white"
              />
              <InputRightElement
                width="auto"
                pr={4}
                height="100%"
                children={
                  <Button type="submit" height="100%" variant="link">
                    Cambiar
                  </Button>
                }
              />
            </InputGroup>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default ZipCode
