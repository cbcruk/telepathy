import { of, timer } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  map,
  catchError,
  switchMapTo,
  pluck,
  distinctUntilChanged
} from 'rxjs/operators'
import isEqual from 'lodash/isEqual'
import { combineEpics, ofType } from 'redux-observable'
import { setItems } from '../actions'
import { FETCH_ITEMS, FETCH_ITEMS_REJECTED } from '../actions/types'

const timer$ = timer(0, 6000)

const error$ = error =>
  of({
    type: FETCH_ITEMS_REJECTED,
    payload: error
  })

const ajax$ = ajax.getJSON('/api/rating').pipe(
  pluck('items'),
  map(setItems),
  catchError(error$)
)

const ajaxWithTimer$ = timer$
  .pipe(switchMapTo(ajax$))
  .pipe(distinctUntilChanged(isEqual))

const fetchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_ITEMS),
    switchMapTo(ajaxWithTimer$)
  )

const rootEpic = combineEpics(fetchEpic)

export default rootEpic
