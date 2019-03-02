import * as React from 'react'
import ModelDetails from './ModelDetails'
import {connect} from 'react-redux'
import {addModel} from "../actions/models"

class ModelDetailsContainer extends React.Component {
  render() {
    return this.props.modelDetails.map(model => {
      return <ModelDetails {...model} />
    })
  }
}

const mapStateToProps = (state) => {
  return {
    modelDetails: state
  }
}

export default connect(mapStateToProps, {addModel})(ModelDetailsContainer)