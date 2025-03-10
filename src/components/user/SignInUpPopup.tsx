import {useEffect, useState} from "react";
import Popup from "../Popup";
import  {switchPopupForm} from "../Form/useForm";
import UserForm from "../Form/useForm";
import useAccount from "../../Hooks/Auth/useAccount";
import {useAuth} from "../../Hooks/Auth/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function SignInUpPopup(){
    const [openMenu, setOpenMenu] = useState(false)
    const {state,switchState} = switchPopupForm()
    const [title, setTitle] = useState('')
    const {status,account,logOut} = useAccount()
    useEffect(() => {
        if (status){
            Authenticate()
        }
    }, []);

    function handleOpenMenu() {

        setOpenMenu((st) => !st)
    }
    function handleRegistration() {
            handleOpenMenu()
        setTitle("Register")
        switchState()
    }
    function handleLogin() {
        handleOpenMenu()
        setTitle('Login')
        switchState()
    }
    const navigate = useNavigate();

    const {userRegister,logIn,Authenticate} = useAccount()

    const sendRegistrationRequest = (data,formdata) => {
        data && userRegister(data.email, data.password, formdata);
    }
    const sendLoginRequest = (data,formdata) => {
        data && logIn(data.email,data.password, formdata)
    }
    const handleLogOut = () => {

        localStorage.removeItem('app_user_token');

        // Redirect to homepage
        navigate('/');
    }

    return <>
        <div className={'flex justify-evenly w-max'}>
            <button onClick={handleOpenMenu} className={`w-16 ml-5  text-white${ status&&account ? ' ':'bg-amber-900'}`}> {status&&account ? <img src={`/letters/${account.email[0].toUpperCase()}.png`} title={account.email} className={"w-10 scale-125 aspect-square border-2 bg-orange-600 rounded-full"} alt="avatar"/> : <span className={'material-icons scale-150 text-3xl'}>Person</span>} </button>
        </div>
        {openMenu&&
            <Popup className={'fixed top-16 z-[115] *:px-2 *:py-2 py-2 ml-auto right-20 bg-white'}>

                 {status&&account ? <>
                     <Link to={'/dashboard'}>Dashboard</Link>
                     <button className={'border-t'} onClick={handleLogOut}>Se Déconnecter</button>
                 </>
                         :
                    <>
                        <button onClick={handleLogin} >Se connecter</button>
                        <button onClick={handleRegistration} className={'border-t'} >Créer un compte</button>
                    </>
                 }

            </Popup>
        }
        {state  && <> {
            title === 'Login'? <UserForm onClose={switchState} switcher={setTitle} title={title} onSubmit={sendLoginRequest}/>: <UserForm onClose={switchState} switcher={setTitle} title={title} onSubmit={sendRegistrationRequest}/>

        }
        </>
        }
    </>
}