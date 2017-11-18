import React from "react";
import UploadSection from './UploadSection'

class Header extends React.Component {
  render() {

    return (
      <div id="header-container">
        <div id="page-title">
          <h1>
            Recipe Box
          </h1>
          <p>Share your favorite recipe</p>
        </div>
        <UploadSection fetchCreateRecipe ={this.props.fetchCreateRecipe}/>
      </div>
    )
  }

}

export default Header;
