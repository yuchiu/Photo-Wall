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
      <div className="card border-secondary mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col ml-2" style={{
              maxWidth: '48%'
            }}>
              <div>
                <h4 className="card-title display-4 mb-4 mt-4">{recipe.name}</h4>
                <br/>
                <p className="card-text lead mb-5">{recipe.ingred}{this.props.recipe.id}</p>
                <div className="row mt-5">
                  <EditRecipeModal
                    recipe={this.props.recipe}
                    fetcEditRecipe={this.props.fetcEditRecipe}/>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={this
                    .handleClick
                    .bind(this)}>Delete</button>
                </div>
              </div>
            </div>
            <div className="col" style={{
              maxWidth: '38%'
            }}>
              <div className="text-center">
                <img
                  src={recipe.image}
                  style={{
                  maxHeight: 300
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