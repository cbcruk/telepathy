import {
  SET_ITEMS,
  SET_CATEGORY,
  SET_ID,
  FETCH_ITEMS,
  FETCH_ITEMS_REJECTED,
  ChannelsActionTypes,
  State,
} from './types'
import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction } from 'redux'

export const initialState = {
  items: [],
  category: '',
  id: '',
  isFetching: false,
  error: null,
}

export default function (
  state: State = initialState,
  action: ChannelsActionTypes & AnyAction
): State {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case FETCH_ITEMS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ITEMS_REJECTED:
      return {
        ...state,
        items: [],
        isFetching: false,
        error: action.payload,
      }
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      }
    default:
      return state
  }
}
