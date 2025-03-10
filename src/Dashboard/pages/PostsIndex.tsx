import React from 'react';

import { NavLink } from 'react-router-dom';

function PostsIndex(props) {
    const post = {
        id: 1,
        title: 'Réalisez des projets de conception de sites Web 30 % plus rapidement avec\n' +
            'BugHerd',
        createdAt: '12-12-2022',
        updatedAt: ''
    }
    return (
        <div className="flex  flex-wrap">
            <div className="flex w-full  flex-col  flex-wrap  flex-1  p-4">
                <h1 className='text-center mx-auto text-2xl flex-1 text-gray-400 font-bold mb-5'>
                    POST INDEX
                </h1>
                {/* <a className="border px-4 py-2 ml-auto mb-4 bg-green-600 w-max hover:bg-green-700"
                    href="">Create new</a> */}
                <NavLink className="border px-4 py-2 ml-auto mb-4 bg-green-600 w-max hover:bg-green-700" to={'/article/editor/new'}>Create New</NavLink>
                <table className="adm-table w-full table border table-auto mx-auto  ">
                    <thead className="text-lg sticky top-0 bg-[var(--primary-color)] ">
                        <tr className=" justify-between">

                            <th className={"border-r"}>Id</th>
                            <th className={"  line-clamp-1"}>Title</th>

                            <th className="max-md:hidden ">Created_at</th>
                            <th className="max-md:hidden ">Updated_at</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b  justify-between     border-gray-200 hover:bg-[var(--primary-color-op-50)]">
                            <td className="py-2 border-r ">{post.id}</td>
                            <td className={"px-2"}>{post.title}</td>
                            <td className="max-md:hidden text-center">{post.createdAt}</td>
                            <td className="max-md:hidden text-center">{post.updatedAt}</td>
                            <td className=" flex justify-evenly py-2">
                                <a className='block my-auto' href="{{ path('app_post_show', {'id' : post.id}) }}">show</a>
                                <a className='block my-auto' href="{{ path('app_post_edit', {'id': post.id}) }}">edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default PostsIndex;