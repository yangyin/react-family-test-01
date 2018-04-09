import { combineReducers } from 'redux'

import { couter } from './index.redux'
import { auth } from './Auth.redux'

export default combineReducers({couter,auth})