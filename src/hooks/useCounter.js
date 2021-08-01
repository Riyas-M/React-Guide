import { useState, useEffect } from 'react';

const useCounter = (params = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (params) ? prevCounter + 1 : prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [params]);
    return counter;
};

export default useCounter;