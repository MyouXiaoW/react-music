import {call, put, takeEvery} from 'redux-saga/effects';
import API from '../servers/api';

const actioncreator = (type, payload) => ({type, payload});

function* getbanner(action) {
  const res = yield call(API.getBanner);
  yield put(actioncreator('success', res.body));
}

function* runsaga() {
  yield takeEvery('request', getbanner);
}
export default runsaga;
