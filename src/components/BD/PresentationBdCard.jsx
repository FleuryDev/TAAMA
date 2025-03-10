import { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { CarouselFade } from '../carousels/carouselBD';

export default function PresentationBdCard({ BD_obj }) {

    const { title, images, description, created_at, read_count, status, slug } = BD_obj

    return <Fragment>
        <div className="flex w-full h-min flex-wrap overflow-hidden  bg-[var(--secondary-color)]  shadow-md rounded-md">
            <div className="relative overflow-hidden  block justify-center w-full md:w-1/2">
                {images &&

                    <CarouselFade fadeImages={images} classStyles={'w-full  relative  aspect-video mx-auto align-center items-center max-md:rounded-t-lg'} />
                }
            </div>
            <div className="flex overflow-hidden relative w-full p-0 flex-col md:w-1/2 ">


                <div className="flex flex-col pt-2">
                    <h3 className='mx-auto font-bold text-xl'>{title} </h3>
                    <p className=' px-4 py-2 text-justify text-base'>{description}</p>



                </div>
                <div className="flex flex-col  px-4 text-sm text-gray-500 bd-infos">
                    <p className=''><span className="material-icons">globe_book</span> <span>Date de sortie :</span>{created_at} </p>
                    <p className=''> <span className="material-icons">local_library</span><span>Lu &nbsp;</span> {read_count} fois </p>
                    <p><span className="material-icons">bookmark_added</span> <span>Status :</span> {status ? 'Disponible ' : 'Non disponible'}<span className={`material-icons ${status ? ' text-green-600' : 'text-red-600'}`}>  {status ? `check_circle` : 'close'}</span> </p>
                    <div className="bd-action">
                        <Link to={`/bandes-desinees`}>Voir les détails </Link >

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}