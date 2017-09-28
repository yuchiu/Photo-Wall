import React from "react";
import AddRecipe from './AddRecipe'

class Header extends React.Component {
  render() {

    return (
      <div className="row mt-4 justify-content-center">
        <h1>
          Real Time Recipe App
        </h1>
        <div className="col-md-12 row lead  justify-content-center">
          <p>Recipe for LIFE! Upload your favorite recipe here!</p>
          <AddRecipe/>
        </div>
      </div>
    )
  }

}

export default Header;
