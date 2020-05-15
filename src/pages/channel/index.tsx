import React from 'react'
import { useSelector } from 'react-redux'
import { getChannels } from '../../store/channels/selectors'
import useFetching from '../../hooks/useFetching'
import useCategory from '../../hooks/useCategory'
import Layout from '../../components/Layout'
import Channels from '../../components/Channel/Channels'
import Skeleton from '../../components/Channel/Skeleton'
import * as actions from '../../store/channels/actions'
import { RootState } from '../../store'

const Channel = ({ location }) => {
  const channels = useSelector((state: RootState) => getChannels(state))
  const isFetching = useFetching()
  const category = useCategory(location.search, actions.setCategory)

  return (
    <Layout title={category}>
      {[<Channels {...{ channels }} />, <Skeleton />][~~isFetching]}
    </Layout>
  )
}

export default Channel
