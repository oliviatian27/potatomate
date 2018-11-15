import { API_ROOT, HEADERS } from 'Custom/data';
const API_KEY="88fdbb927487aed9f71408214ac83e55";
const API_BACK_END="http://localhost:8000/api/v1"

export function updateMovie(obj){
  return {
    type:'FETCH_MOVIE',
    payload:obj
  }
}
export function updateTv(obj){
  return {
    type:'FETCH_TV',
    payload:obj
  }
}

export function handleMoreMovieItem(obj){
  return {
    type:'HANDLE_MORE_MOVIE_ITEM',
    payload:obj
  }
}
export function handleMoreTvItem(obj){
  return {
    type:'HANDLE_MORE_TV_ITEM',
    payload:obj
  }
}


export function fetchMovie(media_type,url,genre,sortType,page){
  return (dispatch)=>{
    fetch (`https://api.themoviedb.org/3/discover/${media_type}?api_key=${API_KEY}&language=en-US&sort_by=${sortType}&page=${page}&vote_count.gte=100${url}`)
    .then(r=>r.json())
    .then(data=>{
        const results=data.results.filter(m=>m.backdrop_path)
        const obj={[genre]:results}
        if (page>1) {
           media_type==="movie"?dispatch(handleMoreMovieItem(obj)):dispatch(handleMoreTvItem(obj))
        }else {
           media_type==="movie"?dispatch(updateMovie(obj)):dispatch(updateTv(obj))
        }
    })
  }
}

export function updateItem(obj){
  return {
    type:'FETCH_ITEM',
    payload:obj
  }
}
export function updateRecommendations(array){
  return {
    type:"UPDATE_RECOMMENDATIONS",
    payload:array
  }
}
export function fetchItemReview(obj){
  return {
    type:'FETCH_ITEM_REVIEW',
    payload:obj
  }
}
export function fetchItem(type,id){
  return (dispatch)=>{
       fetch (`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`)
       .then(r=>r.json())
       .then(data=>{
         dispatch(updateItem(data))
       })
       fetch (`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&language=en-US`)
       .then(r=>r.json())
       .then(data=>{
         const results=data.results.filter(m=>m.backdrop_path)
         dispatch(updateRecommendations(results))
       })
      fetch(`http://localhost:8000/api/v1/getitemreviews/${id}`)
      .then(r=>r.json())
      .then(data=>{
        dispatch(fetchItemReview(data))
      })

  }
}

export function updateSearchItem(obj){
   return {
     type:'SEARCH_ITEM',
     payload:obj
   }
}

export function searchItem(input){
  return (dispatch)=>{
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}`)
    .then(r=>r.json())
    .then(data=>{
      const results={results:data.results.filter(m=>m.backdrop_path)}
      dispatch(updateSearchItem(results))
    })
  }
}

export function updateReview(obj) {
  return {
    type:'UPDATE_REVIEW',//submitReview
    payload:obj
  }
}

export function submitReview(obj,share) {
  return (dispatch)=>{
    fetch("http://localhost:8000/api/v1/reviews",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({review:obj})
    })
    .then(res=>res.json())
    .then(data=>{
       dispatch(updateReview(data))
       console.log(data)
       if (share) {
         dispatch(postTweet({image:obj.image,content:obj.content,user_id:obj.user_id,tvmovie_id:data.tvmovie.id}))
       }
    })
  }
}

export function updateFriends(data){
  return {
    type:"UPDATE_FRIENDS",
    payload:data
  }
}
export function fetchFriends(id){
  return (dispatch)=>{
    fetch(`http://localhost:8000/api/v1/findfriends/${id}`)
    .then(res=>res.json())
    .then(data=>{
      dispatch(updateFriends(data))
    })
  }
}

export function setCurrentUser(obj){
  return {
    type:'SET_CURRENT_USER',
    payload:obj
  }
}
export function handleSignUp(obj){
  return (dispatch)=>{
    fetch("http://localhost:8000/api/v1/signup",{
       method:"POST",
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify({user:obj})
     }).then(res=>{
       if (res.ok) {
         return res.json()
       } else {
         throw res
       }})
    .then(json=>{

      localStorage.setItem('jwt',json.jwt)
      dispatch(setCurrentUser(json.user))
    }).catch(r=>r.json().then(e=>dispatch({type:'FAILED_SIGNUP',payload:e.error})))
  }
}

export function handleLogin(obj){
  return (dispatch)=>{
    fetch("http://localhost:8000/api/v1/login",{
       method:"POST",
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify({user:obj})
     }).then(res=>{
       if (res.ok) {
         return res.json()
       } else {
         throw res
       }})
    .then(json=>{
      localStorage.setItem('jwt',json.jwt)
      dispatch(setCurrentUser(json.user))
    }).catch(r=>r.json().then(e=>dispatch({type:'FAILED_SIGNUP',payload:e.message})))
  }
}

export function logOutUser(){
  return {
    type:"LOG_OUT"
  }
}

export const fetchCurrentUser=()=>{
  return (dispatch)=>{
    fetch(`${API_BACK_END}/profile`,{
      method:'GET',
      headers:{
        Authorization:`Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(res=>res.json())
    .then(json=>dispatch(setCurrentUser(json.user)))
  }
}


export const editUserProfile=(obj,id)=>{
  return (dispatch)=>{
    fetch(`${API_BACK_END}/users/${id}`,{
      method:'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },body:JSON.stringify({user:{bio:obj.bio,avatar:obj.avatar}})
    }).then(res=>res.json())
    .then(json=>dispatch(setCurrentUser(json.user)))
  }
}
export const setProfileUser=(obj)=>{
  return {
    type:'SET_PROFILE_USER',
    payload:obj
  }
}
export const fetchProfileUser=(id)=>{
  return (dispatch)=>{
    fetch(`http://localhost:8000/api/v1/users/${id}`)
    .then(res=>res.json())
    .then(data=>dispatch(setProfileUser(data.user)))
  }
}

export const setOriginalTweets=(array)=>{
  return {
    type:'SET_ORIGINAL_TWEETS',
    payload:array
  }
}
export const fetchOriginalTweets=(filter,user_id)=>{
  return (dispatch)=>{
    if (filter==="all") {
      fetch("http://localhost:8000/api/v1/tweets")
      .then(res=>res.json())
      .then(data=>dispatch(setOriginalTweets(data)))
    }else {
      fetch(`http://localhost:8000/api/v1/followed_tweets/${user_id}`)
      .then(res=>res.json())
      .then(data=>dispatch(setOriginalTweets(data)))
    }
  }
}
export const updateTweet=(obj)=>{
  return {
    type:'UPDATE_TWEET',
    payload:obj
  }
}


export const postTweet=(obj)=>{
  return (dispatch)=>{
    fetch("http://localhost:8000/api/v1/tweets",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({tweet:obj})
    })
    .then(res=>res.json())
    .then(data=>{
       dispatch(updateTweet(data))
    })
  }
}

export const setConversation=(obj)=>{
  return {
    type:'SET_CONVERSATION',
    payload:obj
  }
}
export const setCommonInterest=(array)=>{
  return {
    type:"SET_COMMON_INTEREST",
    payload:array
  }
}

export const fetchConversation=(recipient_id)=>{
      return (dispatch)=>{
        fetch(`${API_BACK_END}/profile`,{
          method:'GET',
          headers:{
            Authorization:`Bearer ${localStorage.getItem('jwt')}`
          }
        }).then(res=>res.json())
        .then(json=>{
          fetch(`${API_ROOT}/conversations`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({title:'first',recipient_id:recipient_id,sender_id:json.user.id})
          }).then(res=>res.json())
          .then(json=>{
            dispatch (setConversation(json))
          })
          fetch(`${API_BACK_END}/find_common_interest/${json.user.id}/${recipient_id}`)
          .then(res=>res.json())
          .then(json=>{
            dispatch(setCommonInterest(json.common_interest))
          })

        })
       }
}

export const notifyNewMessage=(obj)=>{
  return {
    type:'NOTIFY_NEW_MESSAGE',
    payload:obj
  }
}

export const updateFollowings=(obj)=>{
  return {
    type:"UPDATE_FOLLOWINGS",
    payload:obj
  }
}

export const followUser=(obj)=>{
  return (dispatch)=>{
    fetch("http://localhost:8000/api/v1/follows",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({follow:obj})
    })
    .then(res=>res.json())
    .then(data=>{
       dispatch(updateFollowings(data))
    })
  }
}

export const updateFavorite=(tweet)=>{
  return {
    type:"UPDATE_FAVORITE",
    payload:tweet
  }
}

export const handleFavorite=(tweet_id)=>{
  return (dispatch)=>{
    fetch(`http://localhost:8000/api/v1/tweets/${tweet_id}`,{
      method:'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
       dispatch(updateFavorite(data))
    })
  }
}

export const updateReviewFavorite=(review)=>{
  return {
    type:"UPDATE_REVIEW_FAVORITE",
    payload:review
  }
}

export const handleReviewFavorite=(review_id)=>{
  return (dispatch)=>{
    fetch(`http://localhost:8000/api/v1/reviews/${review_id}`,{
      method:'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
       dispatch(updateReviewFavorite(data))
    })
  }
}
