import { useState, useEffect } from 'react'

// format time
const getTimeLeft = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    const hours = Math.floor(countDown / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(countDown / (1000 * 60) % 60)
    const seconds = Math.floor(countDown / 1000 % 60)

    return [days, hours, minutes, seconds]
}

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    // 倒數日期和現在日期相差的秒數
    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
        }, 1000)

        return () => clearInterval(interval)

    }, [countDownDate])

    return getTimeLeft(countDown)
}

export default useCountdown