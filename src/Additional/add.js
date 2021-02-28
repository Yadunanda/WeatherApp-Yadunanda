import React from 'react'
import Classes from './add.module.css'
let Add =(props) => {
  return(
    <div className={Classes.add}>
<b>Weather data source</b>  -OpenWeathermaps
  <br/>
<b>url of the source</b>-https://openweathermap.org/
  <br/>
    </div>
  )
}
export default Add
