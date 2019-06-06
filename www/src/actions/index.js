import { FETCH_ITEMS, SET_ITEMS, SET_CATEGORY, SET_ID } from './types'

export function fetchItems() {
  return { type: FETCH_ITEMS }
}

export function setItems(items) {
  return {
    type: SET_ITEMS,
    payload: items
  }
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    payload: category
  }
}

export function setId(id) {
  return {
    type: SET_ID,
    payload: id
  }
}
