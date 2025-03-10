import { Fragment, useEffect, useState } from "react";
// @ts-ignore
import BD_oBj from "./bds.json";
import BdCard from "./bdCard";
import axios from "axios";
import { API_URL } from "../../configApi";
export default function Bd() {
    const [bd_articles, setBd_articles] = useState(null);
    useEffect(() => {
        const get_bd = async () => {
            const res = await axios.get(API_URL + '/api/bds?page=1&category=&sortBy=created_at&order=desc&limit=10 ')
            const { articles } = await res.data;
            setBd_articles(articles)

        }
        if (!bd_articles) {
            get_bd();
        }
    }, []);
    return <Fragment>
        <div className="w-full flex justify-between md:w-11/12 mx-auto">
            <div className=" w-full max-md:px-4  flex overflow-hidden justify-between  mx-auto flex-wrap my-6 gap-4 ">

                {
                    bd_articles ? bd_articles.map((article, key) => <BdCard key={key} BD_obj={article} />) : <p className={'text-3xl my-auto mx-auto'}>Loading...</p>
                }

            </div>
        </div>
    </ Fragment>
}