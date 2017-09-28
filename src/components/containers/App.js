import React from 'react'
import Dropzone from 'react-dropzone'
import {Grid, Modal} from 'react-bootstrap'

import Header from './Header'
import RecipeList from './RecipeList'

import {connect} from 'react-redux'
import actions from '../../actions'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      recipe: {
        name: '',
        ingred: '',
        image: ''
      }
    }
  }
  componentDidMount(){
    this
      .props
      .fetchRecipeList()
  }

  uploadeFile(files) {
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe.image =  files[0]

    this.setState({recipe: newRecipe})

  }

  handleChange(nameOrIngred, e) {
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe[nameOrIngred] = e.target.value
    this.setState({recipe: newRecipe})
    console.log(nameOrIngred + ' ' + e.target.value)
  }

  handleClick() {
    console.log('save! name and ingredients: ' + JSON.stringify(this.state.recipe) + ' img :' + JSON.stringify(this.state.image))
    this.props.fetchSave(this.state.recipe, this.props.recipes.recipes.length)
  }

  render() {
    return (
      <Grid>
        <Header/>
        <RecipeList/>
        <br/>
        <input
          value={this.state.name}
          onChange={this
          .handleChange
          .bind(this, 'name')}
          type="text"
          placeholder="Enter Comment"/>
        <input
          value={this.state.ingred}
          onChange={this
          .handleChange
          .bind(this, 'ingred')}
          type="text"
          placeholder="Enter Comment"/>

        <div>
          Images Upload Component
          <Dropzone onDrop={this
            .uploadeFile
            .bind(this)}/>
        </div>
      <button
        onClick={this
        .handleClick
        .bind(this)}
        className="btn btn-primary ripple"
        type="button">New Recipe!
     </button>

      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {recipes: state.recipes}
}
const dispatchToProps = (dispatch) => {
  return {
    fetchSave: (newRecipe, length) => {
      dispatch(actions.fetchSave(newRecipe, length))
    },
    fetchRecipeList: () => {
      dispatch(actions.fetchRecipeList())
    }
  }

}

export default connect(stateToProps, dispatchToProps)(App);
