import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'
import Home from './views/Home'
import Channel from './views/Channel'
import Share from './views/Share'

const App = () => {
  const [isSupportShare] = useState(Boolean(navigator.share))

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
        {!navigator.share && (
          <script src="//developers.kakao.com/sdk/js/kakao.min.js" />
        )}
      </Helmet>
      <Router>
        <Home path="/" />
        <Channel path="/channel" />
        <Share path="/share/:id" />
      </Router>
    </>
  )
}

export default App
