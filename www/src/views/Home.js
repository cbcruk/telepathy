import React from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../selectors'
import Header from '../components/Home/Header'
import Slogan from '../components/Home/Slogan/index.js'
import Categories from '../components/Home/Categories'
import Loading from '../components/Home/Loading'
import Browse from '../components/Home/Browse'
import styles from './Home.module.css'

const Home = ({ categories, isFetching }) => (
  <div className={styles.wrapper}>
    <Header />
    <Slogan className={styles.slogan} />
    {isFetching ? (
      <Loading />
    ) : (
      <Categories className={styles.categories} {...{ categories }} />
    )}
    <Browse />
  </div>
)

export default connect(state => ({
  categories: getCategories(state),
  isFetching: state.items.isFetching
}))(Home)
