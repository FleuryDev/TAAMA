import React, { Fragment } from 'react';

import { CommentInterface } from '../../../lib/interfaces/CommentInterface';
import Comment from './comment';

function Comments({ Comments }: { Comments: Array<CommentInterface> }) {

    let comments: any = [];
    if (Comments) {
        for (const comment of Comments) {

            comments.push(<Comment key={comment.id} comment={comment} />)
        }
    } else {
        comments.push(<div className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4" role="alert">
            <p className="font-bold">Aucun commentaire pour le moment !</p>
            <p></p>
        </div>)

    }


    return <Fragment>

        {comments}

    </Fragment >
}

export default Comments