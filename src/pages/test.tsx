import React, { useRef, useState } from 'react'
import Button from '../component/button';
import paddingHoc from '../component/paddingHoc';
import Home from './home';

export default function Test() {
  const [timerValue, setTimerValue] = useState<number>(0);
  const intervalId = useRef<number>();

  const HocWrapper = paddingHoc(Button)

  function data() {
    return <div>
      <h1>Hello</h1>
    </div>
  }

  function startTimer(isStop: boolean = false) {
    if (!isStop) {
      intervalId.current = setInterval(() => {
        setTimerValue((prev) => ++prev);
      }, 1000)
    } else {
      clearInterval(intervalId.current);

    }

  }

  function resetTimer() {
    setTimerValue(0);
    clearInterval(intervalId.current)
  }






  return (
    //  <Button label='Click me' onButtonClick={()=>{console.log('hello')}}/>


    <div>
      <button onClick={() => startTimer()}>
        Start Timer
      </button>
      <button onClick={() => startTimer(true)}>
        Stop Timer
      </button>
      <button onClick={resetTimer}>
        Reset Timer
      </button>
      <div className='jumbotron'>
        <h1>{timerValue}</h1>
      </div>

      <HocWrapper label='Click me' onButtonClick={()=>{console.log('hello')}}/>
    </div>
  )
}
