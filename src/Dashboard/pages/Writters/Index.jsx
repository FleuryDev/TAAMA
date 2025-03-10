import { Fragment } from 'react';

import { Outlet } from 'react-router';

function WritterApp() {

    return <Fragment>
        <header className="flex bg-blue-500 text-white text-2xl w-full px-4 shadow-sm fixed top-0">App Editor</header>
        <main className='mt-14'>
            <Outlet />
        </main>
    </Fragment>

        ;

}
export default WritterApp