import React, { Fragment } from 'react';

function Footer() {
    return <Fragment>
        <footer className=" body-font border-t px-6 bg-white">
            <div className=" flex justify-around p-0 m-0 pt-12 mx-auto">
                <div className="flex w-full flex-wrap md:text-left mx-6 order-first">
                    <div className="nav-sect">
                        <a className="flex title-font max-md:mx-auto font-medium items-center md:justify-start justify-center text-white max-lg:my-auto ">
                            <img src="/logo.png" alt="" className='' />
                        </a>
                        <span className="ml-1 mt-6 text-lg slogan" >Le premier recueil BD des Afriques</span>
                    </div>
                    <div className="nav-sect ">
                        <h2>ACTIONS</h2>
                        <nav className="list-none mb-5">
                            <li>
                                <a className="">Publications</a>
                            </li>
                            <li>
                                <a >Blog</a>
                            </li>
                            <li>
                                <a >Faire un don</a>
                            </li>

                        </nav>
                    </div>
                    <div className="nav-sect">
                        <h2>INFORMATIONS</h2>
                        <nav className="list-none mb-5">
                            <li>
                                <a className="">À propos</a>
                            </li>
                            <li>
                                <a >Politiques et confidentialité</a>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full  flex flex-col">
                        <h2 className='max-md:text-center'>S'abonner</h2>
                        <div className="flex flex-wrap flex-col justify-center space-y-1 items-end md:justify-start w-full">
                            <div className=" w-full flex  ">
                                <input type="text" id="footer-field" placeholder='yourEmail@domain.ext' name="footer-field" className="w-full block bg-gray-500 bg-opacity-10  border-gray-400  border focus:border-[var(--primary-color)]  focus:bg-transparent  ring-[var(--primary-color-op-50)]  text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="lg:mt-2  text-white bg-[var(--primary-color)] border-0 py-2 px-4 text-center focus:outline-none w-full mx-auto ">S'abonner</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex ">
                <div className="container px-4  py-2 mx-auto flex items-baseline sm:flex-row flex-col flex-wrap">

                    <p className="text-sm max-lg:order-2 text-gray-500 max-lg:pt-2 lg:flex-1 sm:mt-0 mt-4 max-lg:w-full max-lg:block text-center">© 2025 — TAAMA COLLECTIONS —

                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center max-lg:self-center">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>

                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>

    </Fragment >
}

export default Footer