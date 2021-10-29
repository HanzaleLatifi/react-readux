import React from 'react'
import { connect } from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            num Of Cakes : {props.numOfCakes}  
            <button onClick={props.buyCake} >buy</button>   
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        numOfCakes:state.numOfCakes
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)