import constants from '../constants'

let initialState = {
    recipes: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case (constants.FETCH_RECIPE_LIST):
            newState.recipes = action.payload
            return newState
        default:
            return state
    }

}