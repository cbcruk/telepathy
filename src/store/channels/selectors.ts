import { createSelector } from 'reselect'
import groupBy from 'lodash/groupBy'
import { RootState } from '..'

const getItems = (state: RootState) => state.channels.items

const getGroups = (state: RootState) =>
  groupBy(state.channels.items, 'category')

const getCategory = (state: RootState) => state.channels.category

const getId = (state: RootState) => state.channels.id

export const getTotal = createSelector(getItems, (items) => items.length)

export const getCategories = createSelector(getGroups, (groups) => {
  const categories = Object.keys(groups).map((name) => {
    const channels = groups[name]

    return {
      name,
      total: channels.length,
    }
  })

  return categories
})

export const getChannels = createSelector(
  [getItems, getGroups, getCategory],
  (items, groups, category) => {
    switch (category) {
      case '전체':
        return items
      default:
        return groups[category] || []
    }
  }
)

export const getItem = createSelector(
  [getItems, getId],
  (items, id) => items.find((item) => item.id === id) || { name: '' }
)
