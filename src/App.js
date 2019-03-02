import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addModel} from './actions/models'
const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
constructor(props){
  super(props)
this.state = {selectModel : ''}
}
buttonHandler = () => {
  const model = {
    name: this.state.selectedModel,
    ...data[this.state.selectedModel]
  }
  this.props.addModel(model)
}
  updateSelection = (event) => {
    this.setState({selectedModel: event.target.value})  
  }
  render() {
    return (
      <div className="App">

<select value ={this.state.selectModel}
onChange = {this.updateSelection}>

<option value = "">---Pick a Model ---</option>
{Object.keys(data).map(model =>
 <option value = {model}>{`${model} (${data[model].year})`}</option>)}
  </select>
  <button onClick={() => this.buttonHandler()}>Add</button>
      </div>
    );
  }
}


export default connect(null,{addModel})(App);
