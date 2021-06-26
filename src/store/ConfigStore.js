import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './RootReducer'

export const middleware = [
  reduxThunk
]

export default function configureStore () {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
}