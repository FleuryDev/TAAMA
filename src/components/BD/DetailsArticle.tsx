import { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { CarouselFade } from '../carousels/carouselBD';

export default function DetailsArticle({ BD_obj }) {

    const { title, images, description, created_at, read_count, status, slug } = BD_obj

    return <Fragment>
        <div className="flex w-full flex-col   bg-[var(--secondary-color)] md:w-[45%] shadow-md rounded-md">
            {images &&

                <CarouselFade fadeImages={images} classStyles={'w-full aspect-video rounded-t-lg'} />
            }
            <div className="flex flex-col pt-2">
                <h3 className='mx-auto font-bold text-xl'>{title} </h3>
                <p className=' px-4 my-1 text-justify text-base line-clamp-6 overflow-x-hidden'>{description}</p>



            </div>
            <div className="flex flex-col  px-4 text-sm text-gray-500 bd-infos">
                <p className=''><span className="material-icons">globe_book</span> <span>Date de sortie :</span>{created_at} </p>
                <p className=''> <span className="material-icons">local_library</span><span>Lu &nbsp;</span> {read_count} fois </p>
                <p><span className="material-icons">bookmark_added</span> <span>Status :</span> {status ? 'Disponible ' : 'Non disponible'}<span className={`material-icons ${status ? ' text-green-600' : 'text-red-600'}`}>  {status ? `check_circle` : 'close'}</span> </p>
                <div className="bd-action">
                    <Link to={`bd/${slug}`}>Acheter</Link >
                    <Link to={`bd/reader/${slug}`}>Lire un extrait</Link >
                </div>
            </div>
        </div>
    </Fragment>
}