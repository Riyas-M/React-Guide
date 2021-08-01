import React, { useEffect, useState, useCallback } from 'react';

const useHttp = (revertData) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const sendRequest = useCallback(async (reqConfig, revertData) => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            reqConfig.url, {
                method: reqConfig.method ? reqConfig.method: 'GET',
                headers: reqConfig.headers ? reqConfig.headers: {},
                body: reqConfig.body ?  JSON.stringify(reqConfig.body) : null
            }
            //'https://react-4f9c4-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        revertData(data);
        } catch (err) {
        setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading, error, sendRequest
    }
};

export default useHttp;