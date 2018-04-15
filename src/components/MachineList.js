import React from 'react';
import Machine from './Machine.js';

const MachineList = ({machines}) =>
  <div className = 'machineList'>
    <h1>List of Machines</h1>
    <div>
      {machines.map((machine, i) =>
        <Machine key = {i} {...machine}/>
        )}
    </div>
  </div>;

export default MachineList;