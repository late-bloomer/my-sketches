import { createStore } from 'redux'
import rootReducer from './RootReducer'

export default function configureStore () {
    return createStore(
      rootReducer
    )
  }