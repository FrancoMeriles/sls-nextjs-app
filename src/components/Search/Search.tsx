import React from 'react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const Search = () => {
  const router = useRouter()
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/products',
      query: {
        q: value,
        page: 1,
      },
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
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
