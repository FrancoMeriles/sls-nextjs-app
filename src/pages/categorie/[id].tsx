import Head from 'next/head'
import styles from '@base/styles/Home.module.scss'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import LocalApi from '@base/service/local.service'

const App = ({ categorie }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Mercado Libre - Categories</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>{categorie.name}</h1>

          <p className={styles.description}>
            <code className={styles.code}>{categorie.id}</code>
          </p>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const localApi = new LocalApi()
  const categorieId = context.params.id
  const categorie = await localApi.getCategorie(String(categorieId))
  return {
    props: {
      categorie,
    },
  }
}

export default App
