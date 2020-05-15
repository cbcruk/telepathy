import classNames from 'classnames'
import LinkWithRipple from '../../../Base/LinkWithRipple'
import Icon from './Icon'
import { Props } from './types'
import styles from './style.module.css'

const Item: React.FC<Props> = ({ id, name, percent, index, className }) => (
  <LinkWithRipple
    href={`/share/${id}`}
    className={classNames([className, styles.surface])}
    onNavigate={() =>
      window.gtag('event', 'select_item', {
        event_category: 'select',
        event_label: name,
        value: percent,
      })
    }
    data-testid="Item"
  >
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        <div className={styles.percent} data-testid="Item-percent">
          <Icon />
          {percent || '0.01%'}
        </div>
      </div>
      <div className={styles.index}>{`${index + 1}`.padStart(2, '0')}</div>
    </div>
  </LinkWithRipple>
)

export default Item
