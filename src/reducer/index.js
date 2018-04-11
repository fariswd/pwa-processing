import { combineReducers } from 'redux'

import profile from '../reducer/profile'
import contact from '../reducer/contact'

const rootReducer = combineReducers({
  profile,
  contact,
})

export default rootReducer
