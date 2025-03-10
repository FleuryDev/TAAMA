import {
    useEffect,
    useState,
} from 'react';

export default function useCounter(timmer: number) {
    const [counter, setcounter] = useState(timmer)
    useEffect(() => {
        // side effects
        const decount = () => {
            setcounter(t => {
                if (t <= 1) {
                    clearInterval(a)
                    return 0
                }
                return t - 1
            })
        }
        const a = setInterval(decount, 1000)

        // cleanup
        return () => {

            clearInterval(a)
        }

    }, [counter])

    return counter
}