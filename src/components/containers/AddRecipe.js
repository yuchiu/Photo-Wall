import React from "react";

class AddRecipe extends React.Component {

  handleClick() {
    console.log('new recipe clicked')
  }

  render() {

    return (
      <button
        onClick={this
        .handleClick
        .bind(this)}
        className="btn btn-primary ripple"
        type="button">New Recipe!
     </button>
    )
  }

}

export default AddRecipe;