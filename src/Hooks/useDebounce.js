import { useState, useEffect } from 'react';

function useDebounce(value, delay = 300) {
    const [deBounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return deBounceValue;
}

export default useDebounce;