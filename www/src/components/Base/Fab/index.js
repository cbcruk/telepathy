import React from 'react'
import LinkWithRipple from '../LinkWithRipple'
import styles from './style.module.css'

const Fab = ({ href, children }) => (
  <div className={styles.wrapper}>
    <LinkWithRipple className={styles.button} {...{ href }}>
      {children}
    </LinkWithRipple>
  </div>
)

export default Fab
