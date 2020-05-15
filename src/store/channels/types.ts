import { Channels } from '../../components/Channel/Channels/types'

export const FETCH_ITEMS = 'FETCH_ITEMS'
export const FETCH_ITEMS_REJECTED = 'FETCH_ITEMS_REJECTED'
export const SET_ITEMS = 'SET_ITEMS'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_ID = 'SET_ID'

export interface State {
  items: Channels
  category: string
  id: string
  isFetching: boolean
  error: Error
}

interface FetchItemsAction {
  type: typeof FETCH_ITEMS
}

interface SetItemsAction {
  type: typeof SET_ITEMS
  payload: Channels
}

interface SetCategoryAction {
  type: typeof SET_CATEGORY
  payload: string
}

interface SetIdAction {
  type: typeof SET_ID
  payload: string
}

interface FetchItemsRejectedAction {
  type: typeof FETCH_ITEMS_REJECTED
  payload: Error
}

export type ChannelsActionTypes =
  | FetchItemsAction
  | FetchItemsRejectedAction
  | SetItemsAction
  | SetCategoryAction
  | SetIdAction
