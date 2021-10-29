import {useSelector , useDispatch} from 'react-redux'
import {buyCake} from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)  // useSelector Auto access to all state in store
    const dispatch = useDispatch();                       // useDispatch Auto access to all action
    return (
        <div>
             num Of Cakes : {numOfCakes}  
            <button onClick={()=>dispatch(buyCake())} >buy</button>  
        </div>
    )
}

export default HooksCakeContainer
