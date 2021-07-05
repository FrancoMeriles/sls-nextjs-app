import React from 'react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import classes from './CategorieCard.module.scss'
import { getRandomColor } from '@base/utils'

const CategorieCard = ({ id, name }) => {
  return (
    <LinkBox className={classes.CategorieCard}>
      <LinkOverlay href={`categorie/${id}`}>
        <h3>{name}</h3>
        <span
          style={{
            backgroundColor: getRandomColor(),
          }}
        />
      </LinkOverlay>
    </LinkBox>
  )
}

export default CategorieCard
