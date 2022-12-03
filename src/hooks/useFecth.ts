import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFecth<T= unknown>(url: string) {

    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])


    return {data, error ,isFetching}
}