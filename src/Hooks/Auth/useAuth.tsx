import {createContext, useContext, useEffect, useState} from "react";
import useAccount from "./useAccount";
import {Account} from "./Account";

const AuthContext = createContext({
    account : null as null | undefined |Account,
    registerAccount : (data:null|Account)=>{ return data }
})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [account, setAccount] = useState(null);
    const {Authenticate} = useAccount()
    const registerAccount = (user:Account) =>{
        setAccount(user)

        return user;
    }

    return <AuthContext.Provider value={{account,registerAccount}}>
        {children}
    </AuthContext.Provider>
}

