import {useSelector , useDispatch} from 'react-redux'
import { buyIcecream } from '../redux/iceCream/iceCreamActions';

function HooksIcecreamContainer() {
    const numOfIcecream = useSelector(state => state.icecream.numOfIcecream)  // useSelector Auto access to all state in store
    const dispatch = useDispatch();                       // useDispatch Auto access to all action
    return (
        <div>
             num Of icecream : {numOfIcecream}  
            <button onClick={()=>dispatch(buyIcecream())} >buy</button>  
        </div>
    )
}

export default HooksIcecreamContainer
