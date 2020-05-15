import classNames from 'classnames'
import { Props } from './types'
import styles from './style.module.css'

const Slogan: React.FC<Props> = ({ className }) => (
  <p className={classNames([className, styles.wrapper])}>
    Choose topics
    <br />
    that interest you
  </p>
)

export default Slogan
