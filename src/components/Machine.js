import React from 'react';
import Sensor from './Sensor.js';
import { Link } from 'react-router-dom';

const Machine = ({machine}) =>
  <Link to={`/machine/${machine.id}`} className = "machineLink">
    <div className = 'machineCard'>
      <img src = {machine.image} alt = 'icon'/>
      <div className = 'machineId'>
        {machine.id}
      </div>
      <div className = {machine.status}>
        {machine.status}
      </div>
      <ul>
        {machine.sensors.map((sensor, i) =>
          <Sensor key = {i} {...sensor}/>
          )}
      </ul>
    </div>
  </Link>;

export default Machine;