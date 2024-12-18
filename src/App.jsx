import { useEffect, useState } from "react"
import { Counter } from "./components/counter"
import { Header } from "./components/header"
import { Inputcompo } from "./components/input"
import { Time } from "./components/time"
import { Quotes } from "./components/quotes"
import { Footer } from "./components/footer"

function App() {

  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hourse, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const totalTime = hourse * 3600 + minutes * 60 + seconds;
  const handlestart = () => {
    setIsStart(true);
  }

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hourse);
  }
  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  }

  const handlereset = () => {
    setIsStart(false);
    resetTimer();
  }

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  }

  const handleinput = (e) => {
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

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (sec === 0 && min === 0 && hr === 0) {
      handlereset();
      alert('Timer is finished');
      clearInterval(tid);
      return
    }
  }

  useEffect(() => {
    let tid;

    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hourse, tid)
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    }

  }, [isStart, hourse, minutes, seconds])

  return (
    <div className="bg-[#eee] min-h-screen items-center m-0 flex flex-col gap-1 justify-center p-1  ">

      <Header />
      {!isStart && (<Inputcompo onStart={handlestart} handleinput={handleinput} />)}
      {isStart && (<Counter
        hourse={hourse}
        minutes={minutes}
        seconds={seconds}
        isPaused={isPaused}
        handlePause={handlePause}
        handleResume={handleResume}
        onreset={handlereset}
        totalTime={totalTime} />)}
      <Time />
      <Quotes />
      <Footer />
    </div>
  )
}

export default App
