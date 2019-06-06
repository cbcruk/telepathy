import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { getItem } from '../selectors'
import { setId } from '../actions'
import Layout from '../components/Layout'
import Form from '../components/Share/Form'

const Share = ({ item, id, setId }) => {
  const [isSupportShare] = useState(Boolean(navigator.share))

  useEffect(() => {
    setId(id)
  }, [id, setId])

  useEffect(() => {
    if (!isSupportShare) {
      window.kakaoAsyncInit = () => {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY)
      }
    }
  }, [isSupportShare])

  return (
    <>
      <Helmet>
        {!isSupportShare && (
          <script src="//developers.kakao.com/sdk/js/kakao.min.js" />
        )}
      </Helmet>
      <Layout title={item.name}>
        <Form {...{ item, isSupportShare }} />
      </Layout>
    </>
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
