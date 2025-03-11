import Popup from "../Popup";
import RegisterOrLoginForm from "./RegisterOrLoginForm";
import { FormEventHandler, useState } from "react";

export default function UserForm({ title, onSubmit, switcher, onClose }: { title: string, onSubmit: CallableFunction, switcher: CallableFunction, onClose: CallableFunction }) {
    const { state, switchState } = switchPopupForm()
    const handler = () => {
        onClose()


    }
    return <>

        <Popup className={'w-full z-[115] h-[calc(100vh)] bg-transparent max-md:backdrop-blur-sm bg-opacity-40 backdrop-blur-3xl fixed top-0 justify-center p-10 max-md:p-5 align-middle'}>
            <div className={'flex w-full justify-end'}>
                <button onClick={handler}> <span className={'material-icons scale-150'}>close</span></button>
            </div>
            <RegisterOrLoginForm switcher={switcher} title={title} onSubmitMethod={onSubmit} />
        </Popup>
    </>
}
export function switchPopupForm() {
    const [state, setState] = useState(false)

    const switchState = () => {
        setState(k => !k)
    }
    return { state, switchState }
}