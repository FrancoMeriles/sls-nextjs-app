import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Box, Flex } from '@chakra-ui/react'
import { Heart } from '@base/icons'
import Search from '@base/components/Search'

const Header = (props) => {
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
      <Search />
      <Box width="20px" height="20px" ml={2} mr={2}>
        <Heart />
      </Box>
    </Flex>
  )
}

export default Header
