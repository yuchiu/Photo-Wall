import React from 'react'
import Dropzone from 'react-dropzone'
import {Grid, Modal} from 'react-bootstrap'

import Header from '../presentations/Header'
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
    this.props.fetchSave(this.state.recipe)
  }

  render() {
    return (
      <Grid>
        <Header/>
        <RecipeList/>
        <button type="button" className="btn btn-danger">Add Recipe</button>
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
          className="btn btn-primary"
          type="button">Save</button>

      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {recipes: state.recipes}
}
const dispatchToProps = (dispatch) => {
  return {

    fetchSave: (recipe) => {
      dispatch(actions.fetchSave(recipe))
    }
  }

}

export default connect(stateToProps, dispatchToProps)(App);
