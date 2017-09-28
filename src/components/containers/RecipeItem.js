import React from 'react'

class RecipeItem extends React.Component {

  render() {

    return (
      <div className="card border-danger mb-3">
        <div className="card-body text-secondary">
          <div className="row">
            <div className="col">
              <div>
                <h4 className="card-title">Primary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and
                  make up the bulk of the card's content.</p>

                <button type="button" className="btn btn-info">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </div>
            </div>
            <div className="col">
              <div>
                <img
                  src="https://res.cloudinary.com/dushlwfma/image/upload/v1506570400/b73bszj6rpavfxiihehl.jpg"
                  style={{
                  height: 300
                }}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RecipeItem