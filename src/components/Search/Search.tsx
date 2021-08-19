import React, { FC } from 'react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useRouter } from 'next/router'

// Icons
import { SearchIcon } from '@chakra-ui/icons'

interface SearchProps {
  onClose(): void
}

const Search: FC<SearchProps> = ({ onClose }) => {
  const router = useRouter()
  const [value, setValue] = React.useState('')
  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    setValue(target.value)
  }

  const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    onClose()
    if (value) {
      router.push({
        pathname: '/products',
        query: {
          q: value,
          page: 1,
        },
      })
    }
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
            <Button role="button" type="submit" height="100%" variant="link">
              <SearchIcon color="black.500" />
            </Button>
          }
        />
      </InputGroup>
    </form>
  )
}

export default Search
