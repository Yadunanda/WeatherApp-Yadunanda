import React,{Component} from 'react'
import Classes from './homePage.module.css'
import Body from '../Body/Body'

class HomePage extends Component{
state={
  submit:""

}

SubmitHandler=(event) => {
let x=document.getElementById('one').value
this.setState({submit:x})
}
  render(){
    //console.log(this.state.submit)vvvvddtest update;
    return(
      <div >
        <h1 className={Classes.h1}>Yadunanda's Weather App</h1>
        <div >
        <h2 className={Classes.h1}>Enter your place:-</h2>
    <input id="one" className={Classes.input} placeholder='enter your place here' />
    <button onClick={this.SubmitHandler} className={Classes.three}>Submit</button>
     </div>
     <Body  Input={this.state.submit}/>

     </div>

    )
  }
}
export default HomePage
