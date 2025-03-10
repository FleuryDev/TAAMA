import {
    useEffect,
    useState,
} from 'react';

export default function useFetch(input: RequestInfo | URL, init?: RequestInit, setter: CallableFunction = (data, x: CallableFunction) => {

    x(data)
}): any {
    let [dataResponse, setdataResponse] = useState(null)

    useEffect(() => {


        fetch(input, init)
            .then(response => response.json())
            .then(json => setter(json, setdataResponse)
            )
            .catch((error) => {
                console.error(error)
            })

    }, [])


    return dataResponse
}