import React from 'react'
import EditRecipeModal from './EditRecipeModal'

class RecipeItem extends React.Component {

  handleClick (){
    
    this.props.fetchDeleteRecipe(this.props.recipe.id)
  }
  render() {
    const recipe = this.props.recipe

    return (
      <div className="card border-danger mb-3">
        <div className="card-body text-secondary">
          <div className="row">
            <div className="col ml-3">
              <div>
                <h4 className="card-title display-4 mb-4 mt-4">{recipe.name}</h4>
                <br/>
                <p className="card-text lead mt-2">{recipe.ingred}</p>
                <p>id : {recipe.id}</p>
                <div className ="row">
                <EditRecipeModal recipe = {this.props.recipe} fetcEditRecipe={this.props.fetcEditRecipe}/>
                <button type="button" className="btn btn-danger"
                onClick = {this.handleClick.bind(this)}>Delete</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className = "text-center">
                <img
                  src={recipe.image}
                  style={{
                  height: 300
                }}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RecipeItem