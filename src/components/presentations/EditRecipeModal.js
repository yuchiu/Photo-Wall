import React from "react";
import Dropzone from 'react-dropzone'
import Modal from 'react-modal';
import {FormControl} from 'react-bootstrap';

class EditRecipeModal extends React.Component {
  constructor(props) {
    super(props);

    const recipe = props.recipe;
    this.state = {
      modalIsOpen: false,
      isImgUploaded: false,
      recipe: {
        id: recipe.id,
        name: recipe.name,
        ingred: recipe.ingred,
        image: recipe.image
      }
    }
    this.openModal = this
      .openModal
      .bind(this);
    this.closeModal = this
      .closeModal
      .bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
  }
  handleClick() {
    this
      .props
      .fetcEditRecipe(this.state.recipe, this.state.isImgUploaded, this.props.recipe.id)
    this.closeModal()
    this.setState({isImgUploaded: false})
    this
      .props
      .fetchRecipeList()
  }
  checkIfImgUploaded() {
    if (this.state.isImgUploaded == true) {
      return (
        <img src={this.state.recipe.image.preview}></img>
      )
    } else {

      return (
        <img src={this.state.recipe.image}></img>
      )
    }
  }

  render() {

    return (
      <div>
        <button className="recipe-item-btn" onClick={this.openModal}>
          <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel='edit Recipe'
          style={styles}>
              <a className=" edit-close-btn" onClick={this.closeModal}><i className="fa fa-times fa-2x" aria-hidden="true"></i></a>

            <Dropzone
        className="edit-dropzone"
              onDrop={this
              .uploadeFile
              .bind(this)}>{this
                .checkIfImgUploaded
                .bind(this)}
            </Dropzone>

          <form className="edit-form">           
            <div className="edit-input-group">
              <h2>Update Photo</h2>
              <input
                className="edit-input"
                value={this.state.recipe.name}
                onChange={this
                .handleChange
                .bind(this, 'name')}
                type="text"
                placeholder="Name"/>
              <input
                className="edit-input"
                value={this.state.recipe.ingred}
                onChange={this
                .handleChange
                .bind(this, 'ingred')}
                type="text"
                placeholder="descriptions "/>
              <a
                className="edit-save-btn"
                onClick={this
                .handleClick
                .bind(this)}
                type="button">Save
              </a>
            </div>
          </form>
        </Modal>
      </div>
    )
  }
}

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: 550,
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden'
  }
}

export default EditRecipeModal;