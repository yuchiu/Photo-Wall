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
        <img className="recipe-img" src={recipe.image} />
        <div className="photo-overlay">
          <h4 className="recipe-title recipe-ele">{recipe.name}</h4>
          <br/>
          <p className="recipe-description recipe-ele">{recipe.ingred}</p>
          <div className="button-group">
            <EditRecipeModal
              fetchRecipeList={this.props.fetchRecipeList}
              recipe={this.props.recipe}
              fetcEditRecipe={this.props.fetcEditRecipe}/>
            <button
              className="recipe-item-btn recipe-ele"
              type="button"
              onClick={this
              .handleClick
              .bind(this)}>
              <i className="fa fa-times fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

    )
  }
}

export default RecipeItem