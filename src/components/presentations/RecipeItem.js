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
            <div className="col">
              <div>
                <h4 className="card-title">{recipe.name}</h4>
                <p className="card-text">{recipe.ingred}</p>
                <p>id : {recipe.id}</p>
                <EditRecipeModal recipe = {this.props.recipe} fetcEditRecipe={this.props.fetcEditRecipe}/>
                <button type="button" className="btn btn-danger"
                onClick = {this.handleClick.bind(this)}>Delete</button>
              </div>
            </div>
            <div className="col">
              <div>
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