import React from "react";
import CreateRecipeModal from './CreateRecipeModal'

class Header extends React.Component {
  render() {

    return (
      <div className="row mt-4 justify-content-center">
        <h1 className="mb-4">
          Recipe Sharing App
        </h1>
        <div className="col-md-12 row lead  justify-content-center mb-4">
          <p>Recipes for LIFE! Upload your favorite recipe here!</p>
          <CreateRecipeModal fetchCreateRecipe ={this.props.fetchCreateRecipe}/>
        </div>
      </div>
    )
  }

}

export default Header;
