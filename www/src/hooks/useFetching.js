import { useSelector } from 'react-redux'

const useFetching = () => {
  const isFetching = useSelector(state => state.items.isFetching)
  return isFetching
}

export default useFetching
