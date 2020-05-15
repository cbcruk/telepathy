import classNames from 'classnames'
import LinkWithRipple from '../../Base/LinkWithRipple'
import Icon from './Icon'
import { images } from './constants'
import { Props } from './types'
import styles from './style.module.css'

const Category: React.FC<Props> = ({ name, total, className, ...props }) => (
  <LinkWithRipple
    href={`/channel?category=${name}`}
    className={classNames([className, styles.wrapper])}
    onNavigate={() =>
      window.gtag('event', 'view_item_list', {
        event_label: name,
      })
    }
    {...props}
  >
    <img
      src={`/images/${images[name]}.jpeg`}
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
