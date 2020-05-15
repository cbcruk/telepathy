import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import channels from './channels/reducers'
import channelsEpic from './channels/epics'

const rootReducer = combineReducers({
  channels,
})

const rootEpic = combineEpics(...channelsEpic)

export type RootState = ReturnType<typeof rootReducer>

const makeStore: MakeStore<RootState> = (_context: Context) => {
  const epicMiddleware = createEpicMiddleware()
  const middleWares = [epicMiddleware]
  const middleWareEnhancer = applyMiddleware(...middleWares)
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )

  epicMiddleware.run(rootEpic)

  return store
}

export default makeStore

export const wrapper = createWrapper<RootState>(makeStore, { debug: false })
