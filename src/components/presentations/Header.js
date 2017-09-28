import React from "react";
import AddRecipeModal from './AddRecipeModal'

class Header extends React.Component {
  render() {

    return (
      <div className="row mt-4 justify-content-center">
        <h1>
          Real Time Recipe App
        </h1>
        <div className="col-md-12 row lead  justify-content-center">
          <p>Recipe for LIFE! Upload your favorite recipe here!</p>
          <AddRecipeModal recipes = {this.props.recipes}  fetchSave ={this.props.fetchSave}/>
        </div>
      </div>
    )
  }

}

export default Header;
