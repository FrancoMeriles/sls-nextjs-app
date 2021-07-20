import { Icon } from '@chakra-ui/react'

const Star = (props) => {
  return (
    <>
      {props.paint === 'full' && (
        <Icon viewBox="0 0 10 10" {...props}>
          <path
            fill="currentColor"
            d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
          ></path>
        </Icon>
      )}
      {props.paint === 'half' && (
        <Icon viewBox="0 0 10 10" {...props}>
          <g fill="none" fillRule="evenodd">
            <path
              fill="#e0e0e0"
              d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
            ></path>
            <path
              fill="currentColor"
              d="M5.272 8.026L2.137 9.679l.6-3.502L.2 3.697l3.505-.51L5.272 0z"
            ></path>
          </g>
        </Icon>
      )}
      {props.paint === 'empty' && (
        <Icon viewBox="0 0 10 10" {...props}>
          <path
            fill="#e0e0e0"
            d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
          ></path>
        </Icon>
      )}
    </>
  )
}

export default Star
