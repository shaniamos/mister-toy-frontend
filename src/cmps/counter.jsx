import { useEffect, useState } from "react";
import { useEffectUpdate } from "../hooks/useEffectUpdate";

export const Counter = () => {

    const [count, setCount] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        console.log('Mounted');

        // Unmount
        return () => {
            document.title = 'Counter out!'
        }
    }, [])


    // useEffect(() => {
    //     if (!count) return
    //     document.title = count

    // }, [count])

    useEffectUpdate(() => {
        document.title = count
    }, [count])


    // let value = 100
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    console.log('render');
    return (
        <div style={{ backgroundColor: isDarkMode ? '#999' : '#fff' }} className="counter">
            <p>You clicked {count} times</p>
            <button onClick={increment}>
                Click me
            </button>
            <button onClick={() => setIsDarkMode(prevIsDarkMode => !prevIsDarkMode)}>
                {isDarkMode ? '☀️' : '🌓'}
            </button>
        </div>
    );
}
