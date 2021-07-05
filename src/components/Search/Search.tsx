import React from 'react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  const submitest = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitest}>
      <InputGroup borderColor="transparent">
        <Input
          value={value}
          onChange={handleChange}
          variant="outline"
          placeholder="Buscar"
          size="lg"
          focusBorderColor="gray.100"
          backgroundColor="white"
        />
        <InputRightElement
          height="100%"
          children={
            <Button type="submit" height="100%" variant="link">
              <SearchIcon color="black.500" />
            </Button>
          }
        />
      </InputGroup>
    </form>
  )
}

export default Search
