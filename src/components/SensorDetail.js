import React from 'react';

const SensorDetail = ({id, name, status, temperature, vibrations, energy_consumption, installed_at, last_maintenance}) =>
  <div className = 'sensorDetailCard'>
    <h3>Sensor {name}</h3>
    <div>
      <b>ID:</b> {id}
    </div>
    <div>
      <b>Status:</b> {status}
    </div>
    <div>
      <b>Temperature:</b> {temperature} ºC
    </div>
    <div>
      <b>Vibrations:</b> {vibrations} kHz
    </div>
    <div>
      <b>Energy Consumption:</b> {energy_consumption} kW
    </div>
    <div>
      <b>Date of installation:</b> {installed_at}
    </div>
    <div>
      <b>Date of last maintenance:</b> {last_maintenance}
    </div>
    <img src = "http://stackhoney.com/news/public/uploads/droneblog/5-3.png" alt = "vib" height = "200"/>
    <img src = "http://www.trucksess.com/img/swat/graphs/temperature/1999_2000-200001_200003-d.png" alt = "temp" height = "200"/>
    <img src = "http://transitionbath.org/wp-content/uploads/2016/02/BNES-Public-Building-Energy-Graph-22-Graph-intraday-power.png" alt = "energy" height = "200"/>
  </div>
;

export default SensorDetail;