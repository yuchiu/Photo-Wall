import React from "react";
import Dropzone from 'react-dropzone'

class UploadSection extends React.Component {
  constructor() {
    super();
    this.state = {
      isImgUploaded: false,
      imageIsDropped: 'Drop Image Here',
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
    this.setState({imageIsDropped: '✔ Image is saved.'})
  }

  handleChange(nameOrIngred, e) {
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe[nameOrIngred] = e.target.value
    this.setState({recipe: newRecipe})
  }

  handleClick() {
    if (this.state.recipe.name == '' || this.state.recipe.ingred == '') {
      alert('Must fill out the name and ingredient')
      return
    }
    this
      .props
      .fetchCreateRecipe(this.state.recipe, this.state.isImgUploaded)
    this.setState({
      recipe: {
        id: '',
        name: '',
        ingred: '',
        image: ''
      },
      imageIsDropped: false
    })
    this.setState({isImgUploaded: false})
    this.setState({imageIsDropped: 'Drop Image Here'})
  }

  render() {

    return (
      <div>
        <h2>New Recipe</h2>

        <div>
          <form>
            <input
              value={this.state.name}
              onChange={this
              .handleChange
              .bind(this, 'name')}
              type="text"
              placeholder="Name"/>
            <br/>
            <input
              value={this.state.ingred}
              onChange={this
              .handleChange
              .bind(this, 'ingred')}
              type="text"
              placeholder="descriptions"/>
          <Dropzone 
            id="dropzone"
            onDrop={this
            .uploadeFile
            .bind(this)}>
            <p>{this.state.imageIsDropped}</p>
          </Dropzone>
            <button
              onClick={this
              .handleClick
              .bind(this)}
              className="btn btn-danger mr-4"
              type="button">Save!
            </button>
          </form>

        </div>
      </div>
    )
  }
}

export default UploadSection;