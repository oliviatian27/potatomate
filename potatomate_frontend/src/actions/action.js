const API_KEY=process.env.REACT_APP_API_KEY;
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

export function submitReview(obj) {
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
    }).catch(r=>r.json().then(e=>dispatch({type:'FAILED_SIGNUP',payload:e.message})))
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
