import React from 'react'
import Dropzone from 'react-dropzone'
import {Grid, Modal} from 'react-bootstrap'

import Header from '../presentations/Header'
import RecipeList from '../presentations/RecipeList'

import {connect} from 'react-redux'
import actions from '../../actions'

class Layout extends React.Component {
  componentDidMount() {
    this
      .props
      .fetchRecipeList()
  }

  render() {
    return (
      <Grid>
        <Header fetchCreateRecipe ={this.props.fetchCreateRecipe}/>
        <RecipeList
          recipes={this.props.recipes}
          fetchDeleteRecipe={this.props.fetchDeleteRecipe}
          fetcEditRecipe={this.props.fetcEditRecipe}/>
      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {recipes: state.recipes}
}
const dispatchToProps = (dispatch) => {
  return {
    fetchCreateRecipe: (newRecipe, isImgUploaded ) => {
      dispatch(actions.fetchCreateRecipe(newRecipe, isImgUploaded))
    },
    fetchRecipeList: () => {
      dispatch(actions.fetchRecipeList())
    },
    fetcEditRecipe: (editedRecipe, imgIsChanged, id) => {
      dispatch(actions.fetcEditRecipe(editedRecipe, imgIsChanged, id))
    },
    fetchDeleteRecipe: (index) => {
      dispatch(actions.fetchDeleteRecipe(index))
    }
  }

}

export default connect(stateToProps, dispatchToProps)(Layout);
