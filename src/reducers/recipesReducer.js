import constants from '../constants'

let initialState = {
    recipes : []
}

export default (state = initialState, action)=>{
    let newState = Object.assign({}, state)
    switch(action.type){
        case (constants.FETCH_SAVE):        
        newState.recipes.push(action.payload)
        console.log('inside reducer, FETCH_SAVE, newState : ' + JSON.stringify(newState.recipes))
        return newState

        default :
        return state
    }

}