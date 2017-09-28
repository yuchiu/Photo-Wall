import React from 'react'
import RecipeItem from './RecipeItem'

class RecipeList extends React.Component {


  render() {
    return (
      <div>
        <div>
          {this
            .props
            .recipes
            .recipes
            .map((recipe, i) => {
              return <RecipeItem key={i} recipe={recipe}/>
            })}
        </div>
      </div>
    )
  }

}

export default RecipeList