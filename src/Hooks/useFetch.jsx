import React from 'react';
import react from 'react'

const useFetch = () => {
    const [data, setData] = react.useState(null);
    const [error, setError] = react.useState(null);
    const [loading, setLoading] = react.useState(false);

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();

            if (response.ok === false) throw new Error(json.message);
        } catch (error) {
            json = null;
            setError(error.message);
        } finally {
            setData(json);
            setLoading(false);
            return { response, json };
        }
    }, []);

    return {
        data,
        error,
        loading,
        request
    };
}

export default useFetch;