import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';


function UserContainer() {
   const userData= useSelector(state=>state.user);
   const {users , loading , error}=userData ;
   const  dispatch = useDispatch();

   useEffect(() => {
       dispatch(fetchUsers())
     
   }, []) ;

   const renderUsers=()=>{
       if(loading) return <p>loading...</p>
       if(error) return <p>{error}</p>
       if(!loading && !error)
        return(
           <div>
               <h2>user List</h2>
                {users.map((u)=>(
                    <p>{u.name}</p>
                ))}
           </div>
       )
   };
    return (
        <div>
            {renderUsers()}
        </div>
    )
}

export default UserContainer
