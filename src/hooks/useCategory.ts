import { useCallback, useMemo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useCategory = (search: string, action: Function) => {
  const category = useMemo(() => {
    const params = new URLSearchParams(search)
    return params.get('category')
  }, [search])

  const dispatch = useDispatch()
  const setCategory = useCallback((category) => dispatch(action(category)), [
    action,
    dispatch,
  ])

  useEffect(() => {
    setCategory(category)
  }, [category, setCategory])

  return category
}

export default useCategory
