import React from 'react'
import Dropzone from 'react-dropzone'
import {Grid, Modal} from 'react-bootstrap'

import Header from '../presentations/Header'
import RecipeList from '../presentations/RecipeList'
import AddRecipeModal from '../presentations/AddRecipeModal'

import {connect} from 'react-redux'
import actions from '../../actions'

class Layout extends React.Component {
  componentDidMount(){
    this
      .props
      .fetchRecipeList()
  }

  render() {
    return (
      <Grid>
        <Header fetchNewRecipe ={this.props.fetchNewRecipe}/>
        <RecipeList recipes = {this.props.recipes}/>

      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {recipes: state.recipes}
}
const dispatchToProps = (dispatch) => {
  return {
    fetchNewRecipe: (newRecipe) => {
      dispatch(actions.fetchNewRecipe(newRecipe))
    },
    fetchRecipeList: () => {
      dispatch(actions.fetchRecipeList())
    }
  }

}

export default connect(stateToProps, dispatchToProps)(Layout);
