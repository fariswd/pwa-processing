import { combineReducers } from 'redux'

import profile from '../reducer/profile'
import contact from '../reducer/contact'
import image from '../reducer/image'

const rootReducer = combineReducers({
  profile,
  contact,
  image,
})

export default rootReducer
