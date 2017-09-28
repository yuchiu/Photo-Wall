import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {recipesReducer} from '../reducers'


let store = null

export default {

    createStore : ()=>{
        const reducers = combineReducers({
            recipes : recipesReducer
        })
        store = createStore(
            reducers, 
            applyMiddleware(thunk, logger)
        )
        return store
    },

    currentStore : ()=>{
        return store
    }
}