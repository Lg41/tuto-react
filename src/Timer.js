import { Component } from 'react';
import React from 'react';


const countdowntimer =300;

class Timer extends Component {

    constructor(props){
      super(props)
      this.state={
        time : countdowntimer
      }
      this.interval=null
      this.tick=this.tick.bind(this)
  
    }
  
    componentDidMount(){
      this.interval = window.setInterval(this.tick,1000)
    }
  
    componentWillUnmount(){
      window.clearInterval(this.interval) 
    }
  
    tick(){
      this.setState ({time : (this.state.time !==0 ? 
                    this.state.time - 1 : this.state.time= 0)  })
    }
  
    padWithZeros(number,minLength){
      const numberString=number.toString();
      if(numberString.length >= minLength ) return numberString;
      return "0".repeat(minLength-numberString.length)+numberString ;
    } 
  
    getUpdateTimeOnSecond(){
      const second = this.state.time % 60
      
      return this.padWithZeros(second,2)
    }
      
    getUpdateTimeOnMinute(){
      const minute = Math.floor(this.state.time / 60)
  
      return this.padWithZeros(minute,2)
    }
  
   
  
    render(){
  
      return(
        <div >
        <span   >{(this.state.time>=0) ? this.getUpdateTimeOnMinute():<></>} </span>
        <span  >min </span>
        <span  >{(this.state.time>=0) ? this.getUpdateTimeOnSecond():<></>} </span>
        <span  >s </span>
        </div>
      )
    }
    
  }
  

export default Timer;