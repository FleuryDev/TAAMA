import { Fragment } from 'react';

function Login() {
    return <Fragment>
        <div className="flex relative flex-wrap  bg-blue-900 border-b-2 border-t-4 max-w-xl  active border-blue-300 mt-40 md:mt-28 p-5 my-auto w-11/12 mx-auto shadow-lg flex-col rounded-lg backdrop-blur-lg opacity-75 ">
            <h2 className='text-lg font-bold text-center flex-1'>My App </h2><br />
            <h3 className='flex-1 text-lg'>Login</h3>
            <hr />
            <div className="flex flex-1 p-1">
                <form action="" className='block  w-full' method="post">
                    <div className='flex flex-wrap w-full mt-2'>
                        <div className=" w-full flex flex-wrap">

                        <label className='p-2 w-24  flex align-center justify-content-center' htmlFor="mail">E-mail :</label>
                        <input className='flex-1 outline-none p-2     ' type="email" name="mail" id="mail" />
                        </div>
                        <small className=' hidden bg-red-500 block ml-auto p-1'>Invalid e-mail address ! </small>
                    </div>
                    <div className='flex flex-wrap w-full mt-2'>
                        <div className=" w-full flex flex-wrap">

                            <label className='p-2 w-24  flex align-center justify-content-center' htmlFor="pwd">Password :</label>
                            <input className='flex-1  p-2    ' type="password" name="pwd" id="pwd"  />
                        </div>
                        <small className=' hidden bg-red-500 block ml-auto p-1'>Invalid e-mail password ! </small>
                     </div>
                    <div className="flex flex-1">

                    <button className='my-4 px-4 py-2 bg-primary rounded text-lg font-bold mx-auto flex-none'>Connexion</button>
                    </div>
                    <div className="flex flex-1 justify-between">

                        <a href="/" className='text-blue-300 rounded border px-2 py-1  action'>Forgot Password</a>
                        <a href="/" className='text-blue-300 rounded border px-2 py-1  action'>Register</a>
                    </div>

                </form>
            </div>
        </div>

    </Fragment>
}

export default Login