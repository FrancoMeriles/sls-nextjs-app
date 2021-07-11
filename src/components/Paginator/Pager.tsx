import { Paginator, Previous, usePaginator, Next, PageGroup } from 'chakra-paginator'
import { ButtonProps, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Pager = ({ paging, url }) => {
  const router = useRouter()
  const outerLimit = 2
  const innerLimit = 2
  const { isDisabled, pagesQuantity, currentPage } = usePaginator({
    total: paging.total,
    initialState: {
      pageSize: 50,
      currentPage: Number(paging.currentPage),
      isDisabled: false,
    },
  })

  const baseStyles: ButtonProps = {
    minWidth: 7,
    fontSize: 'sm',
    margin: 0.1,
    paddingLeft: '13px',
    paddingRight: '13px',
  }

  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: 'gray.300',
    },
    bg: 'gray.200',
  }

  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: 'gray.300',
    },
    bg: 'gray.300',
  }

  const separatorStyles: ButtonProps = {
    w: 7,
    bg: 'gray.200',
  }

  const handlePageChange = (nextPage: number) => {
    router.push({
      pathname: url,
      query: {
        page: nextPage,
      },
    })
  }

  return (
    <Paginator
      isDisabled={isDisabled}
      activeStyles={activeStyles}
      innerLimit={innerLimit}
      currentPage={currentPage}
      outerLimit={outerLimit}
      normalStyles={normalStyles}
      separatorStyles={separatorStyles}
      pagesQuantity={pagesQuantity}
      onPageChange={handlePageChange}
    >
      <Container display="flex" align="center" justifyContent="space-between" w="full" p={4}>
        <Previous bg="transparent" _hover={{ bg: 'transparent' }}>
          Anterior
        </Previous>
        <PageGroup isInline align="center" />
        <Next bg="transparent" _hover={{ bg: 'transparent' }}>
          Siguiente
        </Next>
      </Container>
    </Paginator>
  )
}

export default Pager
