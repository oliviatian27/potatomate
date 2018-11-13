export default function tv_movies(state={originalTweetList:[]},action){
  switch (action.type) {
   case 'SET_ORIGINAL_TWEETS':
       return {...state,originalTweetList:action.payload}
   case 'UPDATE_TWEET':
      return {...state,originalTweetList:[action.payload,...state.originalTweetList]}
   case 'UPDATE_FAVORITE':
      return {...state,originalTweetList:state.originalTweetList.map(tweet=>tweet.id===action.payload.id?
      action.payload:tweet)}
    default:
       return state
  }

}
