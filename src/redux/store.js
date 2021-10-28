import {createStore} from 'redux'
import cakeReducer from './cake/cakeReaducer'
const store=createStore(cakeReducer)
export default store ;