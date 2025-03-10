import { Fragment } from 'react';

import { Link } from 'react-router-dom';

function CategoriesSection({ data }) {
  const a = []
  if (data.length > 0) {

    for (const element of data) {
      a.push(<li key={element.id}><Link className='hover:underline text-black hover:text-[var(--primary-color)]' to={element.uri}  > {element.name}  </Link></li>)
    }
  }
  return <Fragment>
    <div className="w-full  p-10 max-md:p-4 max-md:mb-4 max-md:flex-1 ">

      <h2 className='font-semibold text-black mb-3'>Categories</h2>
      <ul className='flex-col gap-2  p-1 list-disc pl-5  space-y-3'>

        {a}

      </ul>
    </div>
  </Fragment>
}

export default CategoriesSection   