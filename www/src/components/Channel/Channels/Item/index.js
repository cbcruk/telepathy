import React from 'react'
import LinkWithRipple from '../../../Base/LinkWithRipple'
import Icon from './Icon'
import styles from './style.module.css'

const Item = ({ channel, channel: { name, percent, index } }) => (
  <LinkWithRipple
    href={`/share/${channel.id}`}
    className={styles.surface}
    onNavigate={() =>
      window.gtag('event', 'select_item', {
        event_category: 'select',
        event_label: name,
        value: percent
      })
    }
  >
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        <div className={styles.percent}>
          <Icon />
          {percent || '0.01%'}
        </div>
      </div>
      <div className={styles.index}>{index}</div>
    </div>
  </LinkWithRipple>
)

export default Item
