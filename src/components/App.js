
import { Component } from 'react';
import {handelInitalData} from '../actions/shared'
import {connect} from 'react-redux'



class App extends Component{
  componentDidMount(){
    this.props.dispatch(handelInitalData())
  }

  render(){
    return (
      
      <div>Hiiiiiiiiiiiii</div>

    )
  }
}

export default connect()(App);
