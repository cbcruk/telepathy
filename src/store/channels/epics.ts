import { of, timer } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  map,
  catchError,
  switchMapTo,
  pluck,
  distinctUntilChanged,
} from 'rxjs/operators'
import isEqual from 'lodash/isEqual'
import { ofType, Epic } from 'redux-observable'
import * as actions from './actions'
import { FETCH_ITEMS, ChannelsActionTypes } from './types'

const timer$ = timer(0, 6000)

const ajax$ = ajax.getJSON('/api/rating').pipe(
  pluck('items'),
  map(actions.setItems),
  catchError((error: Error) => of(actions.setError(error)))
)

const ajaxWithTimer$ = timer$
  .pipe(switchMapTo(ajax$))
  .pipe(distinctUntilChanged(isEqual))

const channelsEpic: Epic<ChannelsActionTypes> = (action$) =>
  action$.pipe(ofType(FETCH_ITEMS), switchMapTo(ajaxWithTimer$))

export default [channelsEpic]
