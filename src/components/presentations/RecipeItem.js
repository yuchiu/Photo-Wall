import React from 'react'
import EditRecipeModal from './EditRecipeModal'

class RecipeItem extends React.Component {

  handleClick() {

    this
      .props
      .fetchDeleteRecipe(this.props.recipe.id)
  }
  render() {
    const recipe = this.props.recipe

    return (
      <div className="recipe-container">
      <img className="recipe-img" src={recipe.image}/>
          <h4 className="recipe-title recipe-ele">{recipe.name}</h4>
          <br/>
          <p  className="recipe-description recipe-ele">{recipe.ingred}</p>
            <EditRecipeModal
              recipe={this.props.recipe}
              fetcEditRecipe={this.props.fetcEditRecipe}/>
            <button
            className="delete-btn recipe-ele"
              type="button"
              onClick={this
              .handleClick
              .bind(this)}>Delete</button>
      </div>

    )
  }
}

export default RecipeItem