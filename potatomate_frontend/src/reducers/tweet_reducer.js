export default function tv_movies(state={originalTweetList:[]},action){
  switch (action.type) {
   case 'SET_ORIGINAL_TWEETS':
       return {...state,originalTweetList:state.originalTweetList.concat(action.payload)}
   case 'UPDATE_TWEET':
      return {...state,originalTweetList:state.originalTweetList.concat(action.payload)}
    default:
       return state
  }

}
