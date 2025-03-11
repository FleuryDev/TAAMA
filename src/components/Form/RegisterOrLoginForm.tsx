import React, { useState } from 'react';

export default function RegisterOrLoginForm({ title, onSubmitMethod, switcher }: { title: string, onSubmitMethod: CallableFunction, switcher: CallableFunction }) {


    const [mail, setMail] = useState('')
    const [pwd, setPwd] = useState('')
    const handleButtonAction = (e) => {
        const sw = (t) => {
            return t === 'Login' ? 'Register' : 'Login'
        }
        switcher(sw(e.target.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {
            email: formData.get('email'),
            password: formData.get('pwd')
        }
        onSubmitMethod(data, formData)
    }

    // const handlerValidation = (e) => {
    //   const element = e.target
    // }


    return <>
        <div className="flex relative flex-wrap  bg-gray-100 border-b-2 border-t-4 max-w-xl  active border-amber-700 md:mt-28 p-5 my-auto w-11/12 mx-auto shadow-lg flex-col rounded-lg backdrop-blur-3xl  ">
            <h2 className='text-lg font-bold text-center mx-auto flex-1'>{title === 'Login' ? 'Connexion' : "S'enregistrer"} </h2><br />

            <hr />
            <div className="flex w-full flex-1 p-1">
                <form onSubmit={handleSubmit} className='flex flex-col justify-between w-full' method="post">
                    <div className='flex flex-wrap w-full mt-2'>
                        <div className=" w-full flex flex-wrap">

                            <label className='p-2 flex-auto flex-no-wrap max-w-max  flex align-center justify-content-center' htmlFor="mail">E-mail :</label>
                            <input required={true} minLength={3} aria-invalid={true} value={mail} onChange={(e) => setMail(e.target.value)} className='flex flex-auto overflow-hidden  outline-1 outline-gray-300  p-2  ' type="email" name="email" id="mail" />
                        </div>
                        <small className=' hidden bg-red-300 block ml-auto p-1'>Invalid e-mail address ! </small>
                    </div>
                    <div className='flex flex-wrap w-full mt-2'>
                        <div className=" w-full flex flex-wrap">

                            <label className='p-2 flex-auto flex-no-wrap max-w-max flex align-center justify-content-center' htmlFor="pwd">Password :</label>
                            <input required={true} minLength={6} value={pwd} onChange={(e) => setPwd(e.target.value)} className='flex flex-auto  p-2 overflow-hidden  outline-1 outline-gray-300  ' type="password" name="pwd" id="pwd" />
                        </div>
                        <small className=' hidden bg-red-300 block ml-auto p-1'>Invalid e-mail password ! </small>
                    </div>
                    <div className="flex flex-1">

                        <button className='my-4 px-4 py-2 bg-primary hover:bg-[var(--primary-color-op-30)] rounded text-lg font-bold mx-auto flex-none'>{title === 'Login' ? 'Connexion' : "S'enregistrer"}</button>
                    </div>
                    <div className="flex flex-1 flex-wrap max-md:gap-3 justify-between">
                        {title === 'Login' ?
                            <a href="/" className=' rounded border px-2 py-1  action'>Mot de passe oublier</a> : ''
                        }

                        <button value={title} onClick={handleButtonAction} className=' rounded border px-2 py-1  action'> {title === 'Register' ? 'Se Connecter' : "S'enregistrer"}</button>


                    </div>

                </form>
            </div>
        </div>

    </>
}