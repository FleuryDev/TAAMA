import {
    useEffect,
    useState,
} from 'react';

export default function useArticle({ url }: { url: string }) {
    const [Articles, setArticles] = useState()


    useEffect(() => {

        fetch(url)
            .then(response => console.log(response) )
            .then(json => {
                console.log(json);
                setArticles(json)
            })
            .catch((error) => {
                console.log(error)
            })
    }


        , [])


    return [Articles, setArticles]
}

