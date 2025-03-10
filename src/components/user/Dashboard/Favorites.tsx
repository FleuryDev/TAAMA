import useAccount from "../../../Hooks/Auth/useAccount";
import FavoriteBDs from "./BD/FavoritesBDs";

export default function Favorites() {

    const {account} = useAccount()
    return <>
        <FavoriteBDs userId={account?.id}/>

    </>
}