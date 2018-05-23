import { combineReducers } from 'redux'
import { user } from './reducers/user.reducer'
import { home } from './reducers/home.reducer'
import { register } from './reducers/register.reducer'

export default combineReducers({user,home,register})