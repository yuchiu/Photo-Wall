import React from "react";
import UploadSection from './UploadSection'

class Header extends React.Component {
  render() {

    return (
      <div id="header-container">
        <div id="page-title">
          <h1>
            Photo Wall <i className="fa fa-camera" aria-hidden="true"></i>
          </h1>
          <p>Beautiful, free photos.<br/>
            Gifted by the world’s most generous community of photographers.</p>
        </div>
          <UploadSection fetchCreateRecipe ={this.props.fetchCreateRecipe}/>
      </div>
    )
  }

}

export default Header;
