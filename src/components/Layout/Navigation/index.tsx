import Router from 'next/router'
import Icon from './Icon'
import styles from './style.module.css'
import { Props } from './types'

const Navigation: React.FC<Props> = ({ title }) => {
  return (
    <nav className={styles.wrapper}>
      <button onClick={() => Router.back()}>
        <Icon />
      </button>
      <h1 className={styles.title}>{title}</h1>
      <div style={{ width: 16 }} />
    </nav>
  )
}

export default Navigation
