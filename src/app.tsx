import React from 'react'
import '@/styles/index.css'
import CountdownTimer from './components/CountdownTimer'

const app = () => {
  const THREE_DAYS_IN_MS = 10 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  )
}

export default app