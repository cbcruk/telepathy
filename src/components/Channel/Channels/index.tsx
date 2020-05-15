import { useTransition, animated } from 'react-spring'
import classNames from 'classnames'
import Item from './Item'
import { Props } from './types'
import styles from './style.module.css'

const Channels: React.FC<Props> = ({ className, channels }) => {
  const transitions = useTransition(
    channels.map((item, index) => {
      return {
        ...item,
        top: 82 * index,
      }
    }),
    (item) => item.id,
    {
      from: { opacity: 0 },
      enter: ({ top }) => ({ top, opacity: 1 }),
      leave: { opacity: 0 },
      update: ({ top }) => ({ top }),
    }
  )

  return (
    <div
      className={classNames([className, styles.wrapper])}
      data-testid="Channels"
    >
      {transitions.map(({ item, props: { top, ...rest }, key }, index) => {
        return (
          <animated.div
            key={key}
            className={styles.item}
            style={{
              zIndex: channels.length - index,
              transform: top.interpolate((top) => `translate3d(0,${top}px,0)`),
              ...rest,
            }}
            data-testid={`List-item-${index}`}
          >
            <Item
              id={item.id}
              name={item.name}
              percent={item.percent}
              index={index}
              className={styles.item}
            />
          </animated.div>
        )
      })}
    </div>
  )
}

export default Channels
