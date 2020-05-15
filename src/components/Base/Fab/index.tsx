import LinkWithRipple from '../LinkWithRipple'
import { Props } from './types'
import styles from './style.module.css'

const Fab: React.FC<Props> = ({ href, children }) => (
  <div className={styles.wrapper} data-testid="Fab">
    <LinkWithRipple
      href={href}
      className={styles.button}
      data-testid="Fab-link"
    >
      {children}
    </LinkWithRipple>
  </div>
)

export default Fab
