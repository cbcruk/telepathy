import React from 'react'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'
import Home from './views/Home'
import Channel from './views/Channel'
import Share from './views/Share'
import useShare from './hooks/useShare'

const App = () => {
  const isSupportShare = useShare()

  return (
    <>
      <Helmet>
        {!isSupportShare && (
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
