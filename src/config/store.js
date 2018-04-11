import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/'

import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, middleware)

export default store
