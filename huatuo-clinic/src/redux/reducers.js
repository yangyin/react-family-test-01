import { combineReducers } from 'redux'
import { user } from './reducers/user.reducer'
import { home } from './reducers/home.reducer'

export default combineReducers({user,home})