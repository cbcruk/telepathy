import { Channels } from '../../components/Channel/Channels/types'
import {
  FETCH_ITEMS,
  SET_ITEMS,
  SET_CATEGORY,
  SET_ID,
  FETCH_ITEMS_REJECTED,
} from './types'

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
  }
}

export function setItems(items: Channels) {
  return {
    type: SET_ITEMS,
    payload: items,
  }
}

export function setCategory(category: string) {
  return {
    type: SET_CATEGORY,
    payload: category,
  }
}

export function setId(id: string) {
  return {
    type: SET_ID,
    payload: id,
  }
}

export function setError(error: Error) {
  return {
    type: FETCH_ITEMS_REJECTED,
    payload: error,
  }
}
