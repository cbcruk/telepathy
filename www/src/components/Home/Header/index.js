import React from 'react'
import { Link } from '@reach/router'
import Icon from './Icon'
import styles from './style.module.css'

const Header = () => (
  <div className={styles.wrapper}>
    <h1>
      <Link to="/" className={styles.link}>
        <Icon className={styles.icon} />
      </Link>
    </h1>
  </div>
)

export default Header
