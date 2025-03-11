import { Account } from "./Account";
import { useCallback, useState } from "react";
import { UserInterface } from "./UserInterface";
import { useAuth } from "./useAuth";
import axios from "axios";
import { json, Navigate, redirectDocument, Router, useNavigate, useRoutes } from "react-router-dom";
import { redirect } from "react-router";
import MessageComponent from "../../components/Messages/MessageListener";
import { API_URL } from './../../configApi';
import React from "react";

export const enum AuthenticationState {
    Unknown,
    Authenticated,
    Guest,
}

/**
 *Déterminer létat de connexion de l'utilisateur actuel
 * et s'il est connecter renvoie  les informations de l'utilisateur
 */
const useAccount = () => {
    const { account, registerAccount } = useAuth();
    let status;
    switch (account) {
        case null:
            status = AuthenticationState.Guest;
            break;
        case undefined:
            status = AuthenticationState.Unknown;
            break;
        default:
            status = AuthenticationState.Authenticated;
            break;

    }


    const Authenticate = useCallback(() => {
        // @ts-ignore
        const getInfosStateOnAuthenticationOfUser = async () => {
            try {
                const token = localStorage.getItem('app_user_token')
                const response = await fetch(API_URL + '/api/user/verify-token', {
                    credentials: "same-origin",
                    method: "post",
                    body: JSON.stringify({ token: token })
                });
                const data = await response.json();
                if (response.status === 401 && data.state === 0) {

                    return <Navigate to="/home" replace />;
                }
                const { user } = data


                registerAccount(user)
            } catch (e) {
                registerAccount(null)
            }
        }
        getInfosStateOnAuthenticationOfUser()
    },
        [])

    const userRegister = useCallback((email, password, formdata) => {
        // @ts-ignore
        const registerUser = async () => {
            const data1 = {
                "email": email,
                "password": password
            }

            const response = await fetch(API_URL + '/api/user/register', {
                method: 'POST',
                credentials: "same-origin",
                body: JSON.stringify(data1),



            })
            const data = await response.json();


            registerAccount(data)


            logIn(email, password, formdata)

            return <MessageComponent body={'Votre compte est bien créeé : ' + email} msgType={'success'} />;

        }
        registerUser()

    },
        [])

    const logIn = useCallback((email, password, formdata) => {
        // @ts-ignore
        const loginUser = async () => {

            const data1 = {
                "email": email,
                "password": password
            }
            const response = await fetch(API_URL + '/api/user/login', {
                method: 'POST',
                credentials: "same-origin",
                body: JSON.stringify(data1),
            })
            if (!response.ok) {
                console.error("Server error:", response.status, response.statusText);

                return;
            }
            const data = await response.json();
            localStorage.setItem('app_user_token', data.tokens)
            registerAccount(data.user)
            alert('Connecté en tant que : ' + email + 'Veuillez fermer cette fenêtre!')
            return <MessageComponent body={'Connecté en tant que : ' + email} msgType={'success'} />;
        }

        loginUser()
    },
        [])

    const logOut = useCallback((email: string) => {
        // @ts-ignore
        const logoutUser = async () => {
            // try{


            const response = await fetch(API_URL + '/api/user/logout', {
                method: 'post',
                credentials: 'same-origin',
                body: JSON.stringify({ email: email })

            })
            if (!response.ok) {
                console.error("Server error:", response.status, response.statusText);

                return;
            }
            if (response.status === 200) {

                registerAccount(null)
            }
            const data = await response.json()
            return data
            // }catch (e) {
            //     console.error('Error while login out :', e)
            //     return;
            // }
        }
        logoutUser()
    }, [])

    return { status, account, Authenticate, logIn, logOut, userRegister }
}



export default useAccount;