import { Channel } from '../types'

export type Props = Pick<Channel, 'id' | 'name' | 'percent'> & {
  index: number
  className?: string
}
