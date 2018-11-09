import {combineReducers} from 'redux'
import tv_movies from './tv_movie_reducer'
import user from './user_reducer'

export default combineReducers({
  tv_movies,
  user
})
