import React from 'react'
import { useTransition, animated } from 'react-spring'
import classNames from 'classnames'
import chunk from 'lodash/chunk'
import Category from '../Category'
import styles from './style.module.css'

const Categories = ({ className, categories }) => {
  const size = Math.ceil(categories.length / 3)
  const rows = chunk(categories, size)

  const transitions = useTransition(rows, (_item, index) => index, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  return (
    <div className={classNames([className, styles.wrapper])}>
      <div className={styles.scroller}>
        {transitions.map(({ item, key, props }) => {
          return (
            <animated.div
              key={key}
              style={{
                ...props
              }}
              className={classNames([styles.row], {
                'only-child': categories.length === 1
              })}
            >
              {item.map(category => (
                <Category
                  key={category.name}
                  className={styles.item}
                  {...category}
                />
              ))}
            </animated.div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
