import React from 'react'
import Icon from './Icon'
import styles from './style.module.css'

const { history } = window

const Navigation = ({ title }) => (
  <nav className={styles.wrapper}>
    <button onClick={() => history.go(-1)}>
      <Icon />
    </button>
    <h1 className={styles.title}>{title}</h1>
    <div style={{ width: 16 }} />
  </nav>
)

export default Navigation
