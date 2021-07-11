import { Container, Button, Tag } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Pager = ({ url }) => {
  const router = useRouter()
  const { page } = router.query

  const handlePrevious = () => handleAction(Number(page) - 1)
  const handleNext = () => handleAction(Number(page) + 1)

  const handleAction = (nextPage) => {
    delete router.query.id
    router.push({
      pathname: url,
      query: {
        ...router.query,
        page: nextPage,
      },
    })
  }

  return (
    <Container display="flex" align="center" justifyContent="space-evenly" w="full" p={4}>
      <Button
        bg="transparent"
        _focus={{ boxShadow: 'none' }}
        _hover={{ bg: 'transparent' }}
        onClick={handlePrevious}
        disabled={Number(page) <= 1}
      >
        Anterior
      </Button>
      <Tag size="lg" fontWeight="bold" paddingLeft={4} paddingRight={4}>
        {page}
      </Tag>
      <Button
        bg="transparent"
        _focus={{ boxShadow: 'none' }}
        _hover={{ bg: 'transparent' }}
        onClick={handleNext}
        disabled={Number(page) >= 6}
      >
        Siguiente
      </Button>
    </Container>
  )
}

export default Pager
