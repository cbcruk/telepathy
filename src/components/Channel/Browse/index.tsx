import Link from 'next/link'
import Fab from '../../Base/Fab'
import Icon from './Icon'
import { Props } from './types'

const Browse: React.FC<Props> = ({ id }) => (
  <Fab>
    <Link href={`/share/${id}`}>
      <a data-testid="Browse-link">
        <Icon />
      </a>
    </Link>
  </Fab>
)

export default Browse
