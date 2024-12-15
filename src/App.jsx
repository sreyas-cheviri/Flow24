// import React from "react"
import { useState } from "react"
import { Counter } from "./components/counter"
import { Header } from "./components/header"
import { Inputcompo } from "./components/input"

function App() {

  const [isStart ,setIsStart] = useState(false);
  const handlestart =() =>{
    setIsStart(true);
  }
  const handlereset =() =>{
    setIsStart(false);
  }
 
  return (
  <div className="bg-[#eee] min-h-screen  flex flex-col gap-4 p-4">

    <Header/>
    {!isStart && (<Inputcompo onStart ={handlestart}/>)}
    {isStart && (<Counter onreset={handlereset}/>)}
    </div>
    

  )
}

export default App
