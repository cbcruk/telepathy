import React from 'react'
import classNames from 'classnames'
import chunk from 'lodash/chunk'
import Category from '../Category'
import styles from './style.module.css'

const Categories = ({ className, categories }) => {
  const size = Math.ceil(categories.length / 3)
  const rows = chunk(categories, size)

  return (
    <div className={classNames([className, styles.wrapper])}>
      <div className={styles.scroller}>
        {rows.map((categories, index) => (
          <div
            key={index}
            className={classNames([styles.row], {
              'only-child': categories.length === 1
            })}
          >
            {categories.map(category => (
              <Category
                key={category.name}
                className={styles.item}
                {...category}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
