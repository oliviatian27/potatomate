const initialState={
  user:null,
  loggedIn:false,
  failedLogin:false,
  error:null,
  friendsList:[],
  profileUser:{}
}

export default function user(state=initialState,action){
  switch (action.type) {
    case "UPDATE_FRIENDS":
      return {...state,friendsList:action.payload}
    case 'SET_CURRENT_USER':
      return {...state,user:action.payload,loggedIn:true}
    case 'FAILED_SIGNUP':
      return {...state,failedLogin:true,error:action.payload}
    case 'UPDATE_REVIEW':

      return {...state,user:{...state.user,reviews:state.user.reviews.concat(action.payload)}}
    case "LOG_OUT":
      return initialState
    case 'SET_PROFILE_USER':
      return {...state,profileUser:action.payload}
    default:
      return state
  }
}
