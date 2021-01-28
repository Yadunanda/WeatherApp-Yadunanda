import React,{useEffect,useState}from 'react'
import Classes from './Body.module.css'
import axios from 'axios'
import Add from '../Additional/add'
let Body=(props) => {
  let[Res,setresponse]=useState(['-'])
  let[city,setcity]=useState(['Please enter'])
  let[img,setimg]=useState(['10d'])
  let[des,setdescription]=useState(['-'])
  let[feels,setfeels]=useState(['-'])
  let[humid,sethumid]=useState(['-'])



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
     sethumid(response.data.main.humidity)
     setfeels(response.data.main.feels_like)


    console.log('use effect running');

})
.catch((error) => {
  console.log(error);
  //window.alert('Please enter the right place')
  })

})
let display=
<div className={Classes.output}>
<h1>City:{city}  </h1>
<img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
<div className={Classes.left}>
 <h2 >Weather:{des}    </h2>
 <h2 > Temperature(C°):{Res}  </h2>
 </div>
<div className={Classes.right}>
 <h2 > Humidity(%):{humid}  </h2>
 <h2 >  Feels like(C°):{feels} </h2>
 </div>
 </div>

  return(

    <div>

{display}

<Add/>



    </div>
  )
}
export default Body
