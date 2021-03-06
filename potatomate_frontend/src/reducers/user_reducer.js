import { toast } from "react-toastify";
const initialState={
  user:null,
  loggedIn:false,
  failedLogin:false,
  error:null,
  friendsList:[],
  profileUser:{},
  conversation:{},
  common_interest:[]
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
    case 'UPDATE_FOLLOWINGS':
      return {...state,user:{...state.user,followings:state.user.followings.concat(action.payload)}}
    case 'SET_CONVERSATION':
      return {...state,conversation:action.payload}
    case 'SET_COMMON_INTEREST':
     return {...state,common_interest:action.payload}
    case 'NOTIFY_NEW_MESSAGE':
        toast.success(`${action.payload.user.username}:${action.payload.content}`);
        const messages=state.user.allMessages.filter(message=>message.user.id!==action.payload.user.id)
        return {...state,user:{...state.user,allMessages:[action.payload,...messages]}}
    default:
      return state
  }
}
