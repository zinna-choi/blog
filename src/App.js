import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter , Route } from 'react-router-dom';
//import Home from './inc/home.js';//
//import Test from './inc/test.js';//
import {Home,Test} from './inc'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host : '',
    }
  }
  componentDidMount() {
    this._getHost();
  }
  _getHost = async() => {
    const res = await axios.get('/api/host');
    this.setState({ host : res.data.host })
  }

  render(){
    return(
      <div className ='App'>
        <BrowserRouter>
          <Route path="/" component = {Home} exact/>
          <Route path="/test" component = {Test}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
