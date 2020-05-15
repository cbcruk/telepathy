import classNames from 'classnames'
import Navigation from './Navigation'
import { Props } from './types'
import styles from './style.module.css'

const Layout: React.FC<Props> = ({ title, children, className, ...props }) => (
  <div className={classNames([className, styles.wrapper])} {...props}>
    <Navigation title={title} />
    {children}
  </div>
)

export default Layout
