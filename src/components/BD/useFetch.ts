import {
    useEffect,
    useState,
} from 'react';

export default function useFetch(input: RequestInfo | URL, init?: RequestInit) {
    let [dataResponse, setdataResponse] = useState(null)

    useEffect(() => {

        const request = async () =>{

           const res = await fetch(input, init)
                const data = await res.json()
            console.log(data)
            setdataResponse(data)
        }
        if (!dataResponse){
            request();
        }
    }, [])


    return dataResponse&& dataResponse;
}