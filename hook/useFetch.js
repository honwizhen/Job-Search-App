import {useState, useEffect} from 'react';
import axios from 'axios';
import { isLoading } from 'expo-font';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
    'X-RapidAPI-Key': '5c4b624609msh9d5adc1981e0f96p1865b2jsn1cd7cb2e2d69',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
    };

    const fetchData = async () => {
        SetIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            SetIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error, please try again later")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;