import { ajax } from 'rxjs/ajax'
import { switchMap, map } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import { setItems } from '../actions'
import { FETCH_ITEMS } from '../actions/types'

const fetchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_ITEMS),
    switchMap(() =>
      ajax
        .getJSON('/api/rating')
        .pipe(map(response => setItems(response.items)))
    )
  )

const rootEpic = combineEpics(fetchEpic)

export default rootEpic
