import { call, put, select, takeEvery, all, fork } from 'redux-saga/effects'

import { fetchLatestNews, fetchPopularNews } from '../api'
import {
  getLatestNewsSuccess,
  getPopularNewsFailure,
  getLatestNewsFailure,
  getPopularNewsSuccess,
  getLatestNewsFetch,
  getPopularNewsFetch,
} from './news-slice'

function* workGetLatestNewsSaga() {
  try {
    const searchString = yield select(({ newsReducer: { searchString } }) => searchString)
    const { hits } = yield call(fetchLatestNews, searchString)
    yield put(getLatestNewsSuccess(hits))
  } catch (error) {
    yield put(getLatestNewsFailure('Error get latest news'))
  }
}

function* workGetPopularNewsSaga() {
  try {
    const { hits } = yield call(fetchPopularNews)
    yield put(getPopularNewsSuccess(hits))
  } catch (error) {
    yield put(getPopularNewsFailure('Error get popular news'))
  }
}

function* watchGetPopularNewsSaga() {
  yield takeEvery(getPopularNewsFetch.type, workGetPopularNewsSaga)
}

function* watchGetLatestNewsSaga() {
  yield takeEvery(getLatestNewsFetch.type, workGetLatestNewsSaga)
}

function* rootSaga() {
  yield all([fork(watchGetLatestNewsSaga), fork(watchGetPopularNewsSaga)])
}

export { rootSaga }
