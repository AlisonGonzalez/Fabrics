import React, { Component } from 'react';
import MachineList from './components/MachineList.js';
import HeaderComponent from './components/HeaderComponent.js';
import MachineDetail from './components/MachineDetail.js';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { machines: [] };
  }

  componentWillMount(){
    axios.get('http://bang-up-city.000webhostapp.com/data.json').then(res => {
      console.log(res.data);
      let machines = res.data;
      this.setState({machines: machines});
    })
  }

  render() {
    const { machines } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route exact path = '/' render = {() =>
            <div className = "App">
              <HeaderComponent />
              <MachineList machines = {machines} />
            </div>
          } />
          <Route path = '/machine/:id' component = {MachineDetail}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
