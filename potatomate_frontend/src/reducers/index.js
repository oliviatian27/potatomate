import {combineReducers} from 'redux'
import tv_movies from './tv_movie_reducer'
import user from './user_reducer'
import tweet from './tweet_reducer'
export default combineReducers({
  tv_movies,
  user,
  tweet
})
