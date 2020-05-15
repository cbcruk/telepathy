import { useSelector } from 'react-redux'
import { RootState } from '../store'

const useFetching = (): boolean => {
  const isFetching = useSelector(
    (state: RootState) => state.channels.isFetching
  )
  return isFetching
}

export default useFetching
