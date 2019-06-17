import React from 'react'
import { useSelector } from 'react-redux'
import { getCategories } from '../selectors'
import Header from '../components/Home/Header'
import Slogan from '../components/Home/Slogan/index.js'
import Categories from '../components/Home/Categories'
import Loading from '../components/Home/Loading'
import Browse from '../components/Home/Browse'
import useFetching from '../hooks/useFetching'
import styles from '../components/Home/style.module.css'

const Home = () => {
  const categories = useSelector(state => getCategories(state))
  const isFetching = useFetching()

  return (
    <div className={styles.wrapper}>
      <Header />
      <Slogan className={styles.slogan} />
      {
        [
          <Categories className={styles.categories} {...{ categories }} />,
          <Loading />
        ][~~isFetching]
      }
      <Browse />
    </div>
  )
}

export default Home
