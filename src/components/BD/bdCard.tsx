import { Fragment } from 'react';

import { Link } from 'react-router-dom';

export default function BdCard({ BD_obj }) {


    const { title, image_prev, content, created_at, state, slug, price } = BD_obj

    return <Fragment>
        <div className="flex flex-1  w-full flex-col  max-md:min-w-full min-w:[360px]  relative   bg-[var(--secondary-color)]  shadow-md rounded-md">
            {image_prev &&

                //<CarouselFade fadeImages={images} classStyles={'w-full relative aspect-video rounded-t-lg'} />
                <img className={'w-full relative aspect-video rounded-t-lg'} alt={title} src={image_prev} />
            }
            <div className="flex flex-col pt-2">
                <h3 className='mx-auto font-bold text-xl'>{title} </h3>
                <p className=' px-4 my-1 text-justify text-base line-clamp-6 overflow-x-hidden'>{content}</p>



            </div>
            <div className="flex flex-col  px-4 text-sm text-gray-500 bd-infos">
                <p className=''><span className="material-icons">globe_book</span> <span>Date de sortie :</span>{new Date(created_at).toLocaleDateString()} </p>
                <p className=''> <span className="material-icons">money</span><span>Price : </span> ${price}  </p>
                <p><span className="material-icons">bookmark_added</span> <span>Status :</span> {state ? 'Disponible ' : 'Non disponible'}<span className={`material-icons ${state ? ' text-green-600' : 'text-red-600'}`}>  {state ? `check_circle` : 'close'}</span> </p>
                <div className="bd-action">
                    <Link to={`/dashboard/bd/${slug}`}>Lire un extrait</Link >
                </div>
            </div>
        </div>
    </Fragment>
}