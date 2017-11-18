import React from "react";
import Dropzone from 'react-dropzone'

class UploadSection extends React.Component {
  constructor() {
    super();
    this.state = {
      isImgUploaded: false,
      recipe: {
        id: '',
        name: '',
        ingred: '',
        image: ''
      }
    }
  }

  uploadeFile(files) {
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe.image = files[0]
    this.setState({recipe: newRecipe})
    this.setState({isImgUploaded: true})
  }

  handleChange(nameOrIngred, e) {
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe[nameOrIngred] = e.target.value
    this.setState({recipe: newRecipe})
    console.log(this.state.recipe)
  }

  handleClick() {
    if (!this.state.isImgUploaded) {
      alert("Image can't be blank!")
      return
    }
    this
      .props
      .fetchCreateRecipe(this.state.recipe, this.state.isImgUploaded)
    this.setState({isImgUploaded: false})
    this.setState({
      recipe: {
        id: '',
        name: '',
        ingred: '',
        image: ''
      }
    })
    console.log(this.state.recipe.image)
  }

  render() {

    return (
      <form id="upload-form">
        <Dropzone
          id="dropzone"
          style={dropzoneStyle}
          onDrop={this
          .uploadeFile
          .bind(this)}>
          {!this.state.isImgUploaded &&<p>Click or Drag <br/>to upload image.<br/><span id="pointer"><i className="fa fa-hand-pointer-o fa-4x" aria-hidden="true"></i></span></p>}
          <img src={this.state.recipe.image.preview}></img>
        </Dropzone>
        <div id="upload-form-btn-group">
          <input
          className="upload-input"
            value={this.state.recipe.name}
            onChange={this
            .handleChange
            .bind(this, 'name')}
            type="text"
            placeholder="name..."/>
          <input
            className="upload-input"
            value={this.state.recipe.ingred}
            onChange={this
            .handleChange
            .bind(this, 'ingred')}
            type="text"
            placeholder="descriptions..."/>
          <a
            id="upload-btn"
            onClick={this
            .handleClick
            .bind(this)}
            type="button">Upload <i className="fa fa-upload fa-lg" aria-hidden="true"/>
          </a>
        </div>
      </form>
    )
  }
}
//to placehold the drop zone style for scss file
const dropzoneStyle={
}
export default UploadSection;