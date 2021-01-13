import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './State'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './Effect'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
})
sagaMiddleware.run(rootSaga)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./State', () => {
    const { rootReducer: newRootReducer } = require('./State')
    store.replaceReducer(newRootReducer)
  })
}

export default store
