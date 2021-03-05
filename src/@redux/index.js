import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'

// Import initial states
import actorState from './actor/initialState'

// Import reducers
import actorReducer from './actor/reducer'

const initialState = {
  actor: actorState,
}

const rootReducer = combineReducers({
  actor: actorReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger)),
  )
}

const store = configureStore()

export default store
