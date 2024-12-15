// import React from "react"
import { useState } from "react"
import { Counter } from "./components/counter"
import { Header } from "./components/header"
import { Inputcompo } from "./components/input"
import {Time} from "./components/time"
import { Quotes } from "./components/quotes"
import { Footer } from "./components/footer"

function App() {

  const [isStart ,setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hourse, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handlestart =() =>{
    setIsStart(true);
  }
  const handlereset =() =>{
    setIsStart(false);
  }

  const handleinput= (e) =>{
    console.log(e.target.id, e.target.value);
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === 'hrs') {
      setHours(value);
    } else if (id === 'min') {
      setMinutes(value);
    } else {
      setSeconds(value);
    } 
  }


  return (
  <div className="bg-[#eee] min-h-screen items-center m-0 flex flex-col gap-1 justify-center p-1  ">

    <Header/>
    {!isStart && (<Inputcompo onStart ={handlestart} handleinput={handleinput}/>)}
    {isStart && (<Counter onreset={handlereset} />)}
    
    <Time/>
    <Quotes/>
    {/* <Quotes/> */}
    <Footer/>

    </div>
    

  )
}

export default App
