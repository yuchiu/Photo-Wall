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
      alert('Upload an image')
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
          onDrop={this
          .uploadeFile
          .bind(this)}>
          {!this.state.isImgUploaded &&<p>Click or Drag <br/>to upload image.<br/><span id="pointer"><i className="fa fa-hand-pointer-o fa-4x" aria-hidden="true"></i></span></p>}
          <img src={this.state.recipe.image.preview}></img>
        </Dropzone>
        <div id="upload-form-btn-group">
          <input
            id="upload-name-input"
            value={this.state.recipe.name}
            onChange={this
            .handleChange
            .bind(this, 'name')}
            type="text"
            placeholder="Name"/>
          <input
            id="upload-description-input"
            value={this.state.recipe.ingred}
            onChange={this
            .handleChange
            .bind(this, 'ingred')}
            type="text"
            placeholder="descriptions"/>
          <a
            id="upload-btn"
            onClick={this
            .handleClick
            .bind(this)}
            className="a-tag-btn sandy-one"
            type="button">Upload
          </a>
        </div>
      </form>
    )
  }
}

export default UploadSection;