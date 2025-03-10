import {
    useEffect,
    useState,
} from 'react';

import axios from 'axios';

import { API_URL } from '../../../../configApi';
import DetailsArticle from '../../../BD/DetailsArticle';

export default function BdList() {
    const [data, setData] = useState(undefined)
    useEffect(() => {
        const get_bd = async () => {
            const res = await axios.get(API_URL + '/api/bd/articles')
            const elements = await res.data;
            setData(elements)
        }
        if (!data) {
            get_bd()

        }

    }, []);
    return <div className={'flex w-full flex-wrap justify-center justify-items-center bg-white align-middle p-6'}>
        <h2 className={'text-xl font-bold'}>Nos Bandes désssinée</h2>

        <div className={'flex w-full flex-col gap-4 mt-4'}>
            {
                data === undefined ?
                    <div className={"flex px-6 py-4 flex-1 bg-gray-100 justify-items-center justify-center items-center text-blue-600  text-xl text-center"}>Loading...</div>
                    :
                    <div className=" w-full max-md:px-4  flex overflow-hidden justify-between  mx-auto flex-wrap my-6 gap-8 ">
                        {data.map((article, key) => <DetailsArticle key={key} BD_obj={article} />)}

                    </div>

            }

        </div>
    </div>
}
