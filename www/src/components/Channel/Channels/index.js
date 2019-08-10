import React, { useMemo } from 'react'
import classNames from 'classnames'
import List from './List'
import Item from './Item'
import styles from './style.module.css'

const Channels = ({ className, channels }) => {
  const indexedChannels = useMemo(
    () =>
      channels.map((channel, index) => {
        return {
          ...channel,
          index: `${index + 1}`.padStart(2, '0')
        }
      }),
    [channels]
  )

  return (
    <div className={classNames([className, styles.wrapper])}>
      <List items={indexedChannels}>
        {channel => <Item key={channel.id} channel={{ ...channel }} />}
      </List>
    </div>
  )
}

export default Channels
