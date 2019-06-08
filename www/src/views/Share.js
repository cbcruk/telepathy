import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getItem } from '../selectors'
import { setId } from '../actions'
import Layout from '../components/Layout'
import Form from '../components/Share/Form'

const Share = ({ item, id, setId }) => {
  useEffect(() => {
    setId(id)
  }, [id, setId])

  return (
    <Layout title={item.name}>
      <Form {...{ item }} />
    </Layout>
  )
}

export default connect(
  state => ({
    item: getItem(state)
  }),
  dispatch => ({
    setId: id => dispatch(setId(id))
  })
)(Share)
