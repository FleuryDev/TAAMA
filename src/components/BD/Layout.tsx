import {
    Fragment,
    useEffect,
    useState,
} from 'react';

import axios from 'axios';
import { Outlet } from 'react-router';

import { API_URL } from '../../configApi';
import Footer from '../Footer';
import Header from '../Header';
import CategoriesSection from './CategoriesSection';

export default function BdLayout({ links }) {
    const [dataCategories, setDataCategories] = useState(null);

    useEffect(() => {
        // @ts-ignore
        const getCategories = async () => {
            const response = await axios.get(API_URL + '/api/bd/categories');

            //fetch('http://localhost:3000/api/bd/categories');

            const data = await response.data;
            setDataCategories(data)
        }
        if (!dataCategories) {
            getCategories()
        }
    }, []);
    return <Fragment>
        <Header AppName="My App" navigation={links}></Header>

        <main className='pt-20 bg-[url(/bg2.png)] bg-fixed '>
            <div className="flex flex-wrap mx-auto w-full  px-0">
                <section className=' flex-1 flex flex-col max-md:px-0'>
                    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto p-0">
                        <Outlet />

                    </div>
                </section>
                <aside className='w-full flex bg-white  text-[var(--primary-color)] md:border-l border-gray-300     sticky top-20 md:w-[15rem] max-md:h-min h-[calc(100vh-5rem-0.05rem)]'>
                    <div className="flex flex-wrap md:flex-col w-full ">
                        {dataCategories ?
                            <CategoriesSection data={dataCategories} /> : <p className={'my-auto mx-auto'}> Loading...</p>
                        }

                    </div>

                </aside>
            </div>
        </main>

        <Footer />
    </Fragment>
}

