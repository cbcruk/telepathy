import React from 'react'
import { Link } from '@reach/router'
import Fab from '../../Base/Fab'
import Icon from './Icon'

const Browse = ({ id }) => (
  <Fab>
    <Link to={`/share/${id}`}>
      <Icon />
    </Link>
  </Fab>
)

export default Browse
