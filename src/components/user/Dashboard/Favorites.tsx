import React from "react";
import useAccount from "../../../Hooks/Auth/useAccount";
import FavoriteBDs from "./BD/FavoritesBDs";

export default function Favorites() {

    const { account } = useAccount()
    return <>
        <div className="max-w-4xl mx-auto p-4 shadow-sm rounded bg-white">
            <h1 className="text-3xl font-bold mb-4">Mes favories</h1>
            <hr />
            <FavoriteBDs userId={account?.id} />
        </div>
    </>
}