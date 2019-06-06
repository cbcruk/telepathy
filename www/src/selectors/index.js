import { createSelector } from 'reselect'
import groupBy from 'lodash/groupBy'

const getItems = state => state.items.items
const getGroups = state => groupBy(state.items.items, 'category')
const getCategory = state => state.items.category
const getId = state => state.items.id

export const getTotal = createSelector(
  getItems,
  items => items.length
)

export const getCategories = createSelector(
  getGroups,
  groups => {
    const categories = Object.keys(groups).map(name => {
      const channels = groups[name]

      return {
        name,
        total: channels.length
      }
    })

    return categories
  }
)

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
  (items, id) => items.find(item => item.id === id) || {}
)
