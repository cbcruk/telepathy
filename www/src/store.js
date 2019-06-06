import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import items from './reducers/items'
import rootEpic from './epics'
import { fetchItems } from './actions'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    items
  }),
  composeEnhancers(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)

store.dispatch(fetchItems())

export default store
