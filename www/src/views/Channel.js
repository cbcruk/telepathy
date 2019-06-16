import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getChannels } from '../selectors'
import { setCategory } from '../actions'
import Layout from '../components/Layout'
import Skeleton from '../components/Channel/Skeleton'
import Channels from '../components/Channel/Channels'

const Channel = ({ channels, location, isFetching, setCategory }) => {
  const [id, setId] = useState('')
  const params = new URLSearchParams(location.search)
  const category = params.get('category')

  useEffect(() => {
    setCategory(category)
  }, [category, setCategory])

  return (
    <Layout title={category}>
      {isFetching ? <Skeleton /> : <Channels {...{ channels, id, setId }} />}
    </Layout>
  )
}

export default connect(
  state => ({
    channels: getChannels(state),
    isFetching: state.items.isFetching
  }),
  dispatch => ({
    setCategory: category => dispatch(setCategory(category))
  })
)(Channel)
