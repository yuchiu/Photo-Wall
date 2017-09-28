import React from 'react'
import RecipeItem from './RecipeItem'
import {connect} from 'react-redux'

class RecipeList extends React.Component {

  render() {
    return (
      <div>
        <div>
        RecipeList
        <RecipeItem/>
        </div>
      </div>
    )
  }

}
export default connect(stateToProps, dispatchToProps)(RecipeList)