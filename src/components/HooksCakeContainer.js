import {useSelector , useDispatch} from 'react-redux'
import {buyCake} from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const state = useSelector(state => state.numOfCakes)  // useSelector Auto access to all state in store
    const dispatch = useDispatch();                       // useDispatch Auto access to all action
    return (
        <div>
             numOfCakes : {state}  
            <button onClick={()=>dispatch(buyCake())} >buy</button>  
        </div>
    )
}

export default HooksCakeContainer
