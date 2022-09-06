import { useEffect, useRef, useState } from "react"


export const Timer = () => {

    const [time, setTime] = useState(0)
    const intervalIdRef = useRef()
    let intervalId
    
    useEffect(() => {

        intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000);

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [])

    const onStop = () => {
        clearInterval(intervalId)
    }


    return (
        <section className="timer">
            <h3>Clock</h3>
            <p>{time}</p>
            <button onClick={onStop}  >Stop</button>
        </section>
    )
}
