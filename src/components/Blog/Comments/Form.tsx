import React, {
    FormEvent,
    Fragment,
    useEffect,
    useRef,
    useState,
} from 'react';

import Comment from '../../../lib/class/Comment';
import MessageBox from '../../Messages/messgeBox';

interface ActionInterface {
    url: string,
    subjet: number | string
}
function Form({ _action, _method = 'POST', Data, onSetData }: { _action: ActionInterface, _method?: string, Data: any, onSetData: CallableFunction }) {
    const [response, setresponse] = useState(false)
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const data = new FormData(event.target)
        let elm = new Comment()
        elm.content = data.get('msg')
        ref.current.value = ''


        elm.user = {
            "id": 1,
            "name": "fleury ",
            "lastName": "Dev",
            "created_at": null,
            "updated_at": null
        }
        elm.created_at = new Date()
        setresponse(t => !t)
        Data = elm
        onSetData(() => {
            return Data
        })

    }
    let timmer


    const ref = useRef(null)
    useEffect(() => {

        if (response) {
            //timmer = useCounter(5)

        }
    }, [response, timmer])

    return <Fragment>


        {timmer ?
            <MessageBox type={200} message="Comment succesfuly send !" /> : null
        }
        <form name='formComment' onSubmit={handleSubmit} action={_action.url} method={_method}>
            <div className='flex flex-wrap w-full mt-2'>
                <div className=" w-full flex flex-wrap">

                    <label className='p-2 w-24 border border-b-2 flex align-center justify-content-center' htmlFor="nom">Nom :*</label>
                    <input className='flex-1 outline-none px-2 bg-transparent   border-gray-300 border border-l-0   ' type="text" name="mom" id="nom" />
                </div>
                <small className=' hidden bg-red-500 block ml-auto p-1'>Invalid Name ! </small>
            </div>
            <div className='flex flex-wrap w-full mt-2'>
                <div className=" w-full  flex flex-wrap">

                    <label className='p-2 w-24 border border-b-2  flex align-center justify-content-center' htmlFor="mail">E-mail :*</label>
                    <input className='flex-1 bg-transparent outline-none px-2 border-gray-300 border border-l-0  ' type="email" name="mail" id="mail" />
                </div>
                <small className=' hidden bg-red-500 block ml-auto p-1'>Invalid e-mail address ! </small>
            </div>
            <textarea
                ref={ref}
                id="content" name='msg'
                className="w-full p-4 mt-2 bg-transparent border border-gray-300  outline-none resize-none min-h-[150px]"

                placeholder="Saisissez... "
            />
            <label className="cursor-pointer border-0">
                <input type="checkbox" name="" id="" className="checked:bg-primary text-red-600 outline-none" />
                <span className="inline-flex items-center ml-2  font-light">
                    Enregistrer mes informations pour mes prochaines visites.
                </span>
            </label>
            <div className="flex w-full mb-4 mt-2 ">
                <button type="submit" className='border bg-[var(--primary-color)] max-lg:w-full outline-none text-gray-50 py-1 px-4 text-lg  ml-auto'>Poster un commentaire</button>
            </div>
        </form>

    </Fragment>
}

export default Form