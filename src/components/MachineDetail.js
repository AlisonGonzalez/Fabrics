import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SensorDetail from './SensorDetail.js';
import HeaderComponent from './HeaderComponent.js'

class MachineDetail extends Component {
  constructor(props){
    super(props);
    this.state = { sensors: [] };
  }

  componentWillMount(){
    axios.get("https://bang-up-city.000webhostapp.com/"+this.props.match.params.id+".json")
    .then(res => {
      let sensors = res.data;
      this.setState({sensors: sensors});
    })
  }

  render(){
    const { sensors } = this.state;
    console.log(sensors)
    return(
      <div className = 'machineDetailCard'>
        <HeaderComponent />
        <Link to ="/" className="backLink">Regresar</Link>
        <h1 className = "machineTitle" >Machine ID: {this.props.match.params.id}</h1>
        <div>
         {sensors.map((sensor, i) =>
          <SensorDetail key = {i} {...sensor} />
          )}
        </div>
      </div>
    );
  }
}

export default MachineDetail;