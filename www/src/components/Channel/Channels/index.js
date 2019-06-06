import React from 'react'
import classNames from 'classnames'
import Item from './Item'
import styles from './style.module.css'

const Channels = ({ className, channels, id, setId }) => {
  return (
    <div className={classNames([className, styles.wrapper])}>
      {channels.map((channel, index) => {
        const paddedIndex = `${index + 1}`.padStart(2, '0')

        return (
          <Item
            key={channel.id}
            channel={{ ...channel, index: paddedIndex }}
            className={classNames({
              'is-active': channel.id === id
            })}
            onClick={() => setId(channel.id)}
          />
        )
      })}
    </div>
  )
}

export default Channels
