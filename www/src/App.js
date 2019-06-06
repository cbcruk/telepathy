import React from 'react'
import { Router } from '@reach/router'
import Home from './views/Home'
import Channel from './views/Channel'
import Share from './views/Share'

const App = () => (
  <Router>
    <Home path="/" />
    <Channel path="/channel" />
    <Share path="/share/:id" />
  </Router>
)

export default App
