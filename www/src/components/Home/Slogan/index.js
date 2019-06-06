import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

const Slogan = ({ className }) => (
  <p className={classNames([className, styles.wrapper])}>
    Choose topics
    <br />
    that interest you
  </p>
)

export default Slogan
