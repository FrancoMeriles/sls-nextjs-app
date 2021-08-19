import { FC } from 'react'
import { Box } from '@chakra-ui/react'

// Components
import BestShippingOption from './BestShippingOption'
import DevolutionsShippingOptions from './DevolutionsShippingOptions'

interface ContentShippingOptionsProps {
  options: ShippingOption[]
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

const ContentShippingOptions: FC<ContentShippingOptionsProps> = ({ options }) => {
  const bestShippingOption = options.find(({ display }) => display === 'recommended')
  const allwaysShippingOption = options.find(
    ({ shipping_option_type }) => shipping_option_type === 'agency'
  )

  return (
    <Box>
      <BestShippingOption
        bestShippingOption={bestShippingOption}
        allwaysShippingOption={allwaysShippingOption}
      />
      <DevolutionsShippingOptions />
    </Box>
  )
}

export default ContentShippingOptions
