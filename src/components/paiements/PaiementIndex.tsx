import useAccount from "../../Hooks/Auth/useAccount";
import PaiementPage from "./PaiementPage";

export  default  function PaiementIndex(){
    const {account}=useAccount()
    return <div>
        <PaiementPage userEmail={account?.email}/>
    </div>
}