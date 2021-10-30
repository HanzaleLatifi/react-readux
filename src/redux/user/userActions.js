import {FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS} from './usertypes'
import axios from "axios"
 function fetchUsersRequest(){
    return{
        type:FETCH_USERS_REQUEST
    }
}
 function fetchUsersFailure(error){
    return{
        type:FETCH_USERS_FAILURE ,
        payload:error
    }
}
 function fetchUsersSuccess(users){
    return{
        type:FETCH_USERS_SUCCESS ,
        payload:users

    }
}

// async action creator :
export const fetchUsers=()=>{
    return function (dispatch){
        dispatch(fetchUsersRequest)
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            const user=res.data
            dispatch(fetchUsersSuccess(user))
        }).catch((error)=>{
            dispatch(fetchUsersFailure(error.message))
        })

    }

}