import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../../store/channels/actions'
import Icon from './Icon'
import styles from './style.module.css'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const fetchItems = useCallback(() => dispatch(actions.fetchItems()), [
    dispatch,
  ])

  return (
    <div className={styles.wrapper}>
      <h1>
        <button className={styles.link} onClick={fetchItems}>
          <Icon className={styles.icon} />
        </button>
      </h1>
    </div>
  )
}

export default Header
