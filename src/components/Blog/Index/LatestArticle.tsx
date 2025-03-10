import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import ArticleInterface from '../../../lib/interfaces/ArticleInterface';

function LatestArticle({ _article }: { _article: ArticleInterface }) {
  return <Fragment>
    <div aria-label="latest-article" className="flex flex-col w-full rounded-lg border  border-slate-50 shadow relative">
      <span className='block absolute right-0 top-0 px-4 py-2 bg-[var(--primary-color-op-30)] text-white rounded-tr-lg'>Web </span>
      <div className="flex-1 h-40">
        <Link to={_article?.slug} title={_article?.title}>
          <img
            defaultValue={"./images/blog.jfif"}
            src={_article ? _article.preview_image : "./images/blog.jfif"}
            alt=""
            className="object-cover w-full h-64   rounded-t-lg"
          /></Link>
      </div>
      <div className="flex flex-col flex-1 gap-y-1 px-4 py-3">
        <h1 className="text-2xl font-bold text-gray-900">
          <Link to={_article?.slug} >{_article?.title}
          </Link>
        </h1>



        <hr className='border-gray-300' />
        <span className="text-sm text-gray-400 ml-auto italic">{_article?.created_at}</span>
        <p className='text-gray-950 line-clamp-3 '>{_article?.content}</p>
      </div>
    </div>


  </Fragment>
}
export default LatestArticle