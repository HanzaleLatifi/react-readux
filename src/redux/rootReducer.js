import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './iceCream/iceCreamReducer'

const rootReducer=combineReducers({
    cake:cakeReducer ,
    icecream:icecreamReducer
})

export default rootReducer ;