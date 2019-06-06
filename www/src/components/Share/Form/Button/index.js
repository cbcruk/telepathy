import React from 'react'
import classNames from 'classnames'
import { withRipple } from '@material/react-ripple'
import styles from './style.module.css'

const Button = ({ className, initRipple, ...props }) => (
  <button
    type="submit"
    ref={initRipple}
    className={classNames(['mdc-ripple-surface', className, styles.wrapper])}
    {...props}
  >
    공유
  </button>
)

export default withRipple(Button)
