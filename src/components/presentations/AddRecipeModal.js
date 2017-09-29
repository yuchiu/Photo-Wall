import React from "react";
import Dropzone from 'react-dropzone'
import Modal from 'react-modal';
import {FormControl} from 'react-bootstrap';

class AddRecipeModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      imageIsDropped: 'Drop Image Here',
      recipe: {
        id: '',
        name: '',
        ingred: '',
        image: ''
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
      .fetchNewRecipe(this.state.recipe)
    this.setState({
      recipe: {
        id: '',
        name: '',
        ingred: '',
        image: ''
      },
      imageIsDropped: false
    })
    this.setState({imageIsDropped: 'Drop Image Here'})
    this.closeModal()
  }

  render() {

    return (
      <div>
        <button className="ml-4 btn btn-danger lead  btn-lg" onClick={this.openModal}>Add New Recipe</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={styles}>
          <h2
            className='display-4 modal-header mb-5'
            ref={subtitle => this.subtitle = subtitle}>Add New Recipe</h2>

          <div className="row">
            <div className="col">
              <form><FormControl
                value={this.state.name}
                onChange={this
        .handleChange
        .bind(this, 'name')}
                type="text"
                placeholder="Name"/>
                <br/>
                <FormControl
                  className=" mb-5"
                  value={this.state.ingred}
                  onChange={this
                  .handleChange
                  .bind(this, 'ingred')}
                  type="text"
                  placeholder="ingredients "/>
                <div class="row mx-auto mt-5">
                  <button
                    onClick={this
                    .handleClick
                    .bind(this)}
                    className="btn btn-danger mr-4"
                    type="button">Save New Recipe!
                  </button>
                  <button className="btn btn-outline-secondary" onClick={this.closeModal}>close</button>

                </div>
              </form>
            </div>

            <div
              className="col ml-5"
              style
              ={{
              overflow: "none",
              objectFit: 'cover'
            }}>
              <Dropzone
                onDrop={this
                .uploadeFile
                .bind(this)}>
                <p className="mt-4 text-center">{this.state.imageIsDropped}</p>
              </Dropzone>
            </div>
          </div>
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
    width: 600,
    transform: 'translate(-50%, -50%)'
  }
};

export default AddRecipeModal;