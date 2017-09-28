import constants from '../constants'

let initialState = {
    recipes : []
}

export default (state = initialState, action)=>{
    let newState = Object.assign({}, state)
    switch(action.type){
        case (constants.FETCH_RECIPE_LIST):        
        newState.recipes= action.payload
        console.log('inside reducer, FETCH_SAVE, newState : ' + JSON.stringify(action.payload))
        return newState

        default :
        return state
    }

}