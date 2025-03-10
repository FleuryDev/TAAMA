import { Fragment } from 'react';

import { Link } from 'react-router-dom';

function CategoriesSection({ data }:{data:[{ slug : string, title: string}]}) {
    return <Fragment>
        <div className="w-full  p-10 max-md:p-4 max-md:mb-4 max-md:flex-1 ">

            <h2 className='font-semibold text-black mb-3'>Categories</h2>
            <ul className='flex-col gap-2  p-1 list-disc pl-5  space-y-3'>


                {data ? data.map((element, key )=>  <li key={key}><Link className='hover:underline text-black hover:text-[var(--primary-color)]' to={element.slug}  > {element.title}  </Link></li> ) : <p className={'my-auto '}>Aucun élément disponible.</p>}
            </ul>
        </div>
    </Fragment>
}

export default CategoriesSection