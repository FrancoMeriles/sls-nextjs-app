import { Container } from '@chakra-ui/react'

const Error = ({ statusCode }) => (
  <Container display="flex" alignItems="center">
    {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
  </Container>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
