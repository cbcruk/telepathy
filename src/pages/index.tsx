import Head from 'next/head'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import useFetching from '../hooks/useFetching'
import Header from '../components/Home/Header'
import Slogan from '../components/Home/Slogan'
import Categories from '../components/Home/Categories'
import Loading from '../components/Home/Loading'
import { getCategories } from '../store/channels/selectors'
import styles from '../components/Home/style.module.css'

function Home() {
  const categories = useSelector((state: RootState) => getCategories(state))
  const isFetching = useFetching()

  return (
    <>
      <Head>
        <title>telepathy</title>
      </Head>
      <div className={styles.wrapper}>
        <Header />
        <Slogan className={styles.slogan} />
        {
          [
            <Categories className={styles.categories} {...{ categories }} />,
            <Loading />,
          ][~~isFetching]
        }
      </div>
    </>
  )
}

export default Home
