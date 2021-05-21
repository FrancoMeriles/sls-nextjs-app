import Head from 'next/head'
import styles from '@base/styles/Home.module.scss'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import LocalApi from '@base/service/local.service'
import Link from 'next/link'

const App = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercado Libre - Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.TEST!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {categories.map((categorie) => {
            return (
              <Link href={`categorie/${categorie.id}`} key={categorie.id}>
                <div key={categorie.id} className={styles.card}>
                  <h3>{categorie.name}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const localApi = new LocalApi()
  const categories = await localApi.getCategories()
  return {
    props: {
      categories,
    },
  }
}

export default App
