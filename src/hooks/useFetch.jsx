import { useEffect, useState } from "react";

export default function useFetch(url, method, headers) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(false);

    useEffect(() => {
        async function requestfetch() {
            try {
                setLoading(true);
                setError(false);
                const response = await fetch(url, {
                    method: method || "GET",
                    headers: headers
                });
                const data = await response.json();
                setLoading(false);
                setResult(data);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        requestfetch();
    }, []);


    return {
        loading,
        error,
        result,
    }
}