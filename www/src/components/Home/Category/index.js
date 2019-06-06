import React from 'react'
import classNames from 'classnames'
import LinkWithRipple from '../../Base/LinkWithRipple'
import Icon from './Icon'
import { images } from './constants'
import styles from './style.module.css'
import imageResources from './images'

const Category = ({ name, total, className, ...props }) => (
  <LinkWithRipple
    href={`/channel?category=${name}`}
    className={classNames([className, styles.wrapper])}
    {...props}
  >
    <img
      src={imageResources[images[name]]}
      alt=""
      className={styles.thumbnail}
    />
    <div className={styles.body}>
      <div className={styles.name}>{name}</div>
      <div className={styles.meta}>
        <Icon className={styles.icon} />
        <span className={styles.total}>{total}</span>
      </div>
    </div>
  </LinkWithRipple>
)

export default Category
