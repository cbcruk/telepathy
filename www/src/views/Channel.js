import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getChannels } from '../selectors'
import { setCategory } from '../actions'
import Layout from '../components/Layout'
import Channels from '../components/Channel/Channels'

const Channel = ({ channels, location, setCategory }) => {
  const [id, setId] = useState('')
  const params = new URLSearchParams(location.search)
  const category = params.get('category')

  useEffect(() => {
    setCategory(category)
  }, [category, setCategory])

  return (
    <Layout title={category}>
      <Channels {...{ channels, id, setId }} />
    </Layout>
  )
}

export default connect(
  state => ({
    channels: getChannels(state)
  }),
  dispatch => ({
    setCategory: category => dispatch(setCategory(category))
  })
)(Channel)
