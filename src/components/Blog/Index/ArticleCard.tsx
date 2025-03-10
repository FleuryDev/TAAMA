import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

function ArticleCard({ article }: { article: ArticleInterface; }): React.JSX.Element {

    return <Fragment>
        <div className="flex flex-wrap w-full gap-4  border border-gray-100 p-4">
            <div className="w-full md:w-40 lg:w-72 flex justify-center  border ">
                <Link className='block w-full' to={article.slug}><img src="./images/blog.jfif" className='object-cover w-full  mx-auto border-none' alt="" />
                </Link>
            </div>
            <div className="flex-1 mt-4 flex flex-wrap flex-col">
                <h2 className='text-xl text-black font-bold only-self'>
                    <Link to={article.slug}>
                        {article.title}
                    </Link>
                    <hr />
                </h2>
                <small className='ml-auto text-xs text-slate-500 italic'>By Group Innov, {article.created_at}  </small>
                <p className='mt-2 text-black line-clamp-3'>
                    {article.content}
                </p>
            </div>
        </div>
    </Fragment>
}
export default ArticleCard