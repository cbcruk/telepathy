import React from 'react'
import { useSelector } from 'react-redux'
import { getChannels } from '../selectors'
import * as actions from '../actions'
import Layout from '../components/Layout'
import Skeleton from '../components/Channel/Skeleton'
import Channels from '../components/Channel/Channels'
import useFetching from '../hooks/useFetching'
import useCategory from '../hooks/useCategory'

const Channel = ({ location }) => {
  const channels = useSelector(state => getChannels(state))
  const isFetching = useFetching()
  const category = useCategory(location.search, actions.setCategory)

  return (
    <Layout title={category}>
      {[<Channels {...{ channels }} />, <Skeleton />][~~isFetching]}
    </Layout>
  )
}

export default Channel
