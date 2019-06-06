import React from 'react'
import classNames from 'classnames'
import Navigation from './Navigation'
import styles from './style.module.css'

const Layout = ({ title, children, className, ...props }) => (
  <div className={classNames([className, styles.wrapper])} {...props}>
    <Navigation title={title} />
    {children}
  </div>
)

export default Layout
