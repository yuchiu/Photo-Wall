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
      changedImage: false,
      imageIsDropped: 'Drop Image Here',
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
    this.setState({changedImage: true})
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
      .fetcEditRecipe(this.state.recipe, this.state.changedImage)
    this.closeModal()
    this.setState({changedImage: false})
    this.setState({imageIsDropped: 'Drop Image Here'})
  }

  render() {

    return (
      <div>
        <button className="ml-3 btn btn-info lead mr-3" onClick={this.openModal}>Edit Recipe</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={styles}>
          <h2
            className='display-4 modal-header mb-5'
            ref={subtitle => this.subtitle = subtitle}>Edit Recipe</h2>

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
                    type="button">Save Changes
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
}

export default EditRecipeModal;