import React from 'react'
import useCountdown from '../hooks/useCountdown'
import ExpiredNotice from './ExpiredNotice'
import ShowCounter from './ShowCounter'

const CountdownTimer = ({ targetDate }) => {

    const [days, hours, minutes, seconds] = useCountdown(targetDate)
    const isExpire = days + hours + minutes + seconds <= 0;

    return (
        <div>
            {isExpire ?
                <ExpiredNotice />
                : <ShowCounter
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                />}
        </div>
    )

}

export default CountdownTimer