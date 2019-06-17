import React from 'react'
import { useSelector } from 'react-redux'
import { getItem } from '../selectors'
import * as actions from '../actions'
import Layout from '../components/Layout'
import Form from '../components/Share/Form'
import useId from '../hooks/useId'

const Share = ({ id }) => {
  const item = useSelector(state => getItem(state))

  useId(id, actions.setId)

  return (
    <Layout title={item.name}>
      <Form {...{ item }} />
    </Layout>
  )
}

export default Share
