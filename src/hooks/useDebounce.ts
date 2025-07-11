import { useEffect, useMemo, useRef } from 'react';

export const useDebounce = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number
) => {
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return useMemo(() => {
        return (...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    }, [callback, delay]);
};