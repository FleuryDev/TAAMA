import React, { Fragment } from 'react';

import { CommentInterface } from '../../../lib/interfaces/CommentInterface';
import Comments from './Comments';

function View({ comments }: { comments: Array<CommentInterface> }): React.JSX.Element {

    return <Fragment>
        <div className="flex flex-col pt-8 mt-10 max-md:mx-4">
            <h2 className='text-xl mb-4 text-gray-500 '>Commentaire ({comments.length > 0 && comments.length}) </h2>
            <Comments Comments={comments} />
        </div>
    </Fragment>
}
export default View