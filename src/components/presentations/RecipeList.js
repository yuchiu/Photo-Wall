import React from 'react'
import RecipeItem from './RecipeItem'

class RecipeList extends React.Component {

  render() {
    return (
      <div id="recipe-list-container">
          {this
            .props
            .recipes
            .recipes
            .map((recipe, i) => {
              return <RecipeItem
                key={i}
                recipe={recipe}
                fetchDeleteRecipe={this.props.fetchDeleteRecipe}
                fetcEditRecipe={this.props.fetcEditRecipe}/>
            })}
      </div>
    )
  }

}

export default RecipeList