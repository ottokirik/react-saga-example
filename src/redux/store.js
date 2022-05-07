import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './sagas'

import { reducer as newsReducer } from './news-slice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    newsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
