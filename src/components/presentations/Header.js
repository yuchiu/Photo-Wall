import React from "react";
import UploadSection from './UploadSection'

class Header extends React.Component {
  render() {

    return (
      <div id="header-container">
        <h1>
          Recipe Box
        </h1>
        <UploadSection  id="create-btn"fetchCreateRecipe ={this.props.fetchCreateRecipe}/>
      </div>
    )
  }

}

export default Header;
