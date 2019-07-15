import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { switchMap, map, catchError } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import { setItems } from '../actions'
import { FETCH_ITEMS, FETCH_ITEMS_REJECTED } from '../actions/types'

const fetchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_ITEMS),
    switchMap(() =>
      ajax
        .getJSON('/api/rating')
        .pipe(
          map(response => setItems(response.items)),
          catchError(error => of({
            type: FETCH_ITEMS_REJECTED,
            payload: error,
          }))
        )
    )
  )

const rootEpic = combineEpics(fetchEpic)

export default rootEpic
