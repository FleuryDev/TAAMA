import React, {
    Fragment,
    useState,
} from 'react';

import { useParams } from 'react-router-dom';

import useFetch from '../../../Hooks/useFetch';
import ArticleInterface from '../../../lib/interfaces/ArticleInterface';
import Form from '../Comments/Form';
import View from '../Comments/View';

function SingleArticle({ _article }: { _article: ArticleInterface }) {
    return <div aria-label="latest-article" className="flex flex-col w-full  border max-md:border-0  border-slate-200  relative">
        <span className='block absolute right-0 top-0 px-4 py-2 bg-[var(--primary-color-op-30)] text-white rounded-tr-lg'>Web </span>
        <div className="flex-1 h-40">

            <img
                defaultValue={"./images/blog.jfif"}
                src={_article ? _article.preview_image : "./images/blog.jfif"}
                alt=""
                className="object-cover w-full h-64"
            />
        </div>
        <div className="flex flex-col flex-1 gap-y-1 px-4 py-3">
            <h1 className="text-2xl font-bold text-[var(--primary-color)]">
                {_article?.title}

            </h1>



            <hr className='border-gray-300' />
            <span className="text-xs text-gray-400 ml-auto italic">{_article?.created_at}</span>
            <p className='text-black'>{_article?.content}</p>
        </div>
    </div>

}

export default function BlogShow() {
    const { slug } = useParams()
    const showArticle = useFetch('http://localhost:5173/articles.json', undefined, function (data, x: CallableFunction) {

        x((data.filter(function (el) {
            if (el.slug == slug) {
                return el
            }
        }))[0]
        )

    })


    let _article: ArticleInterface = showArticle

    const [comment, setcomment] = useState(null)
    let [CommentAction, setCommentAction] = useState({ url: '/comment/new', subjet: _article?.id })
    if (comment) {
        _article.comments ? _article.comments.push(comment) : _article.comments = [comment]
    }

    if (showArticle != null) {

        return <Fragment>
            < SingleArticle _article={_article} ></SingleArticle >
            <View comments={_article.comments} />
            <div className="w-full mt-4 flex flex-col max-md:px-4">
                <h2 className='text-lg text-gray-600'>Ajouter un commentaire</h2>
                <Form _action={CommentAction} _method='GET' Data={comment} onSetData={setcomment} />
            </div>
        </Fragment >
    }

}



