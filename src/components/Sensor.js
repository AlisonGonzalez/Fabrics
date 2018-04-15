import React from 'react';

const Sensor = ({id, name, status}) =>
  <li className = "sensorCard">
    <span className = 'name'>
      Sensor Name: {name}
    </span>
    <br/>
    <span className = 'id'>
      Sensor ID: {id}
    </span>
    <br/>
    <span className = 'status'>
      Status: {status}
    </span>
  </li>;

export default Sensor;