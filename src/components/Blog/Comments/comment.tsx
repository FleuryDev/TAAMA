import React, { Fragment } from 'react';

import { CommentInterface } from '../../../lib/interfaces/CommentInterface';

function Comment({ comment }: { comment: CommentInterface }): React.JSX.Element {
    return <Fragment>
        <div className="flex flex-col w-auto bgf-[#e7e6eb54] border bg-transparent text-gray-900 mb-4">
            <div className="flex-1 p-1 px-2 border-b border-gray-200 flex w-full whitespace-nowrap justify-normal items-baseline">
                <div className="w-[30px] aspect-square border rounded-full align-baseline self-baseline">
                    <img src="/user.svg" className='object-cover relative w-full rounded-full' alt="" />
                </div>
                <div className="w-2/3  first-letter:uppercase  flex pl-3 align-baseline my-auto ">{comment.user.name + ' ' + comment.user.lastName}</div>
                <div className="w-1/3 text-gray-400 my-auto font-thin italic text-right" > Le {comment.created_at?.getDate()}</div>
            </div>
            <div className="flex-1 p-2 font-light  px-4 line-clamp-[30]">
                {comment.content}
            </div>
            {/* <div className="text-right px-2 text-gray-400  italic py-1 text-xs"> updated on {comment.updated_at?.getDate()}</div> */}
        </div>
        {/* <div className="p-4 py-1 flex flex-wrap bg-[var(--primary-color-op-50)] mb-4">
            <button className='hover:underline hover:text-gray-600 '>Reply {comment.children && '(' + comment.children.length + ')'}</button>
        </div> */}
        {/* comments children is desactived  */}
        {/* {comment.children ?
            <div className="-mt-4 mb-4  ml-14 p-4 border-l">
                <Comments Comments={comment.children} />
            </div> : null
        } */}
    </Fragment >

}
export default Comment