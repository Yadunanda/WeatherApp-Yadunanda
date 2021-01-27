import React,{useEffect,useState}from 'react'
import Classes from './Body.module.css'
import axios from 'axios'
let Body=(props) => {
  let[Res,setresponse]=useState([])
  let[city,setcity]=useState([])
  let[img,setimg]=useState(['10d'])
  let[des,setdescription]=useState(['not available'])

  let put=props.Input
  //console.log(Res);
  let g=`http://api.openweathermap.org/data/2.5/weather?q=${put}&units=metric&appid=a31885095a89df8ea0fbaf33af45888d
`
 let q='http://openweathermap.org/img/wn/02d@2x.png'

useEffect(() => {
  axios.get(g).then((response) => {
    setresponse(response.data.main.temp)
     setcity(response.data.name)
    console.log(response.data)
     setimg(response.data.weather[0].icon)
     setdescription(response.data.weather[0].main)

    console.log('use effect running');

})
.catch((error) => {
  window.alert('Please enter the right place')
  })

})
let display=
<div className={Classes.output}>
<h2>Place:{city}  </h2>
<img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
 <h2>Weather condition:{des} </h2>
 <h2>Temperature:{Res}C° </h2>
 </div>

  return(

    <div>

{display}





    </div>
  )
}
export default Body
