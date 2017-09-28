import React from "react";
import Dropzone from 'react-dropzone'
import Modal from 'react-modal';


class AddRecipeModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      recipe: {
        id : '',
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
    console.log(files)
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe.image = files[0]
    this.setState({recipe: newRecipe})

  }

  handleChange(nameOrIngred, e) {
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe[nameOrIngred] = e.target.value
    this.setState({recipe: newRecipe})
    console.log(nameOrIngred + ' ' + e.target.value)
  }

  handleClick() {
    console.log('save! name and ingredients: ' + JSON.stringify(this.state.recipe))
    if(this.state.recipe.name==''||this.state.recipe.ingred==''){
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
      }
    })
    this.closeModal()
  }

  render() {

    return (
      <div>
        <button className = "btn-outline-warning lead"onClick={this.openModal}>Add New Recipe</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={styles}
          contentLabel="Example Modal">
          <h2 className ={styles.modalTitle}ref={subtitle => this.subtitle = subtitle}>Add New Recipe</h2>
          <form><input
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
          placeholder="ingredients "/>
          <div>
            Upload Image
            <Dropzone onDrop={this
              .uploadeFile
              .bind(this)}/>
          </div>
      <button
        onClick={this
        .handleClick
        .bind(this)}
        className="btn btn-primary"
        type="button">New Recipe!
     </button>
          <button onClick={this.closeModal}>close</button>
          </form>
        </Modal>
      </div>
    )
  }

}
const styles = {
  modalTitle:'display-4 text-muted',
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default AddRecipeModal;