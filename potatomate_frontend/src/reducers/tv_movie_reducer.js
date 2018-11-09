export default function tv_movies(state={originalMovieList:{},
    originalTvList:{},currentItem:{},
  currentItemReviews:[],currentItemRecommendations:[],searchList:{}},action){
  switch (action.type) {
    case 'FETCH_MOVIE':
       return {...state,originalMovieList:{...state.originalMovieList,...action.payload}}
    case 'FETCH_TV':
       return {...state,originalTvList:{...state.originalTvList,...action.payload}}
    case 'HANDLE_MORE_MOVIE_ITEM':
       return {...state,originalMovieList:{...state.originalMovieList,pop:state.originalMovieList.pop.concat(action.payload.pop)}}
    case 'HANDLE_MORE_TV_ITEM':
      return {...state,originalTvList:{...state.originalMovieList,pop:state.originalTvList.pop.concat(action.payload.pop)}}
    case 'FETCH_ITEM':
       return {...state,currentItem:action.payload}
    case 'SEARCH_ITEM':
       return {...state,searchList:action.payload}
    case 'FETCH_ITEM_REVIEW':
       return {...state,currentItemReviews:action.payload}
    case 'UPDATE_RECOMMENDATIONS':
       return {...state,currentItemRecommendations:action.payload}
      break;
   case 'UPDATE_REVIEW':
      return {...state,currentItemReviews:state.currentItemReviews.concat(action.payload)}
    default:
       return state
  }

}
