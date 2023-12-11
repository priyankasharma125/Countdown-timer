import React, { useEffect, useState } from 'react';
import './Timer.css';


const Timer = () => {
    const[Minutes,setMinutes]=useState(0);
    const[Seconds,setSecond]=useState(0);
    const[isRunning,setisRunning]=useState(false);
    useEffect(()=>{
            var timer;
     
            if(isRunning){
                timer=setInterval(()=>{
                    setSecond(Seconds+1);
                    if(Seconds===59){
                        setMinutes(Minutes+1);
                        setSecond(0);
                    }
                },1000)}
                return ()=>clearInterval(timer);
        });
        
        const Reset=()=>{
            setMinutes(0);
            setSecond(0);
            setisRunning(false);
        }
        const handleMinutechange=(e)=>{
            const newMin=parseInt(e.target.value,10);
            setMinutes(isNaN(newMin)?0:newMin);
        } 
        const handleSecondchange=(e)=>{
            const newSec=parseInt(e.target.value,10);
            setSecond(isNaN(newSec)?0:newSec);
        }
        
  return (
   <>
   <div className='timer'>
   <h1 className='text'> Countdown Timer</h1>
   <h1>{Minutes<10?"0"+ Minutes:Minutes}:{Seconds<10?"0"+Seconds:Seconds}</h1>
   <button onClick={()=>setisRunning(true)}>Start</button>
   <button onClick={()=>setisRunning(false)}>Stop</button>
   <button onClick={Reset}>Reset</button><br/><br/>
   <label>Minutes:</label>
   <input type='number'
   value={Minutes||""}
   onChange={handleMinutechange}/><br/><br/>
   <label>Seconds:</label>
   <input type='number'
   value={Seconds||""}
   onChange={handleSecondchange}/>  
   
   </div>
   </>
  )
}

export default Timer;