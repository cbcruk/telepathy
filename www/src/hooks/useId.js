import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useId = (id, action) => {
  const dispatch = useDispatch()
  const setId = useCallback(id => dispatch(action(id)), [dispatch, action])

  useEffect(() => {
    setId(id)
  }, [id, setId])
}

export default useId
