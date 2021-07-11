import React from 'react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import classes from './CategorieCard.module.scss'
import { getRandomColor } from '@base/utils'
import NextLink from 'next/link'

const CategorieCard = ({ id, name }) => {
  return (
    <LinkBox className={classes.CategorieCard}>
      <NextLink href={`categorie/${id}/products?page=1`} passHref>
        <LinkOverlay>
          <h3>{name}</h3>
          <span
            style={{
              backgroundColor: getRandomColor(),
            }}
          />
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}

export default CategorieCard
