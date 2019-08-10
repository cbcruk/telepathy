import React from 'react'
import { useTransition, animated } from 'react-spring'
import styles from './style.module.css'

const List = ({ items, children }) => {
  const transitions = useTransition(
    items.map((item, index) => {
      return {
        ...item,
        y: 82 * index
      }
    }),
    item => item.id,
    {
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y })
    }
  )

  return transitions.map(({ item, props: { y, ...rest }, key }, index) => {
    return (
      <animated.div
        key={key}
        className={styles.item}
        style={{
          zIndex: items.length - index,
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
          ...rest
        }}
        children={children(item)}
      />
    )
  })
}

export default List
