import { combineEpics, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import actions from 'redux-form/es/actions';
import { get } from 'lodash';
import { MOVE } from '../ducks';
import anotherEpic from './anotherEpic';

const obj = {
  name: 'hzuang',
};
const moveEpic = action$ =>
  action$.pipe(
    ofType(MOVE),
    map(() => actions.change('test', 'ZHUANGJIALIN', get(obj, 'name'))),
  );

export default combineEpics(moveEpic, anotherEpic);
