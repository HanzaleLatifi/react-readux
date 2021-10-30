import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'



function CakeWithPayload() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)  // useSelector Auto access to all state in store
    const dispatch = useDispatch();   // useDispatch Auto access to all action
    const [number, setNumber] = useState(0)

    return (
        <div>
            <p>CakeWithPayload</p>
            num Of Cakes : {numOfCakes}
            <br />
            <input onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))} >buy</button>
        </div>
    )
}

export default CakeWithPayload
