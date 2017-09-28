import React from 'react'
import RecipeItem from './RecipeItem'
import {connect} from 'react-redux'

class RecipeList extends React.Component {


  render() {
    return (
      <div>
        <div>
          {this
            .props
            .recipes
            .recipes
            .map((recipe, i) => {
              return <RecipeItem key={i} recipe={recipe}/>
            })}
        </div>
      </div>
    )
  }

}

const stateToProps = (state) => {
  return {recipes: state.recipes}
}

const dispatchToProps = (dispatch) => {
  return {}
}

export default connect(stateToProps, dispatchToProps)(RecipeList)