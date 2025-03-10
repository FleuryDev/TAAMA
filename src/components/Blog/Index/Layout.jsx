import { Fragment } from 'react';

import { Outlet } from 'react-router';

import Footer from '../../Footer';
import Header from '../../Header.js';
import dataCategories from './categories.json';
import CategoriesSection from './CategoriesSection';

function Layout({ links, services }) {
    return <Fragment>
        <Header AppName="My App" navigation={links} services={services}></Header>

        <main className='pt-20 bg-[url(/bg2.png)] bg-fixed '>
            <div className="flex flex-wrap mx-auto w-full  px-0">
                <section className=' flex-1 flex flex-col max-md:px-0'>
                    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto p-0">
                        <Outlet />

                    </div>
                </section>
                <aside className='w-full flex bg-transparent  text-[var(--primary-color)] md:border-l border-gray-300   bg-opacity-50 backdrop-blur-md  sticky top-20 md:w-[15rem] max-md:h-min h-[calc(100vh-5rem)]'>
                    <div className="flex flex-wrap md:flex-col w-full ">
                        <CategoriesSection key={'two'} data={dataCategories.two} />
                        <CategoriesSection key={'one'} data={dataCategories.one} />
                    </div>

                </aside>
            </div>
        </main>

        <Footer />
    </Fragment>
}

export default Layout 