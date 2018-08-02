import { combineEpics, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import actions from 'redux-form/es/actions';
import { MOVE } from '../ducks';

const moveEpic = action$ =>
  action$.pipe(
    ofType(MOVE),
    map(() => actions.change('test', ('NIHAO': 'joln'))),
  );

export default combineEpics(moveEpic);
