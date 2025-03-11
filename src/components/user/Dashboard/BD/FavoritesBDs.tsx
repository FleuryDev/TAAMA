import React, {
    useEffect,
    useState,
} from 'react';

import axios from 'axios';

import { API_URL } from '../../../../configApi';

const FavoriteBDs = ({ userId }) => {
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get(API_URL + '/api/favorites', {
                    params: { userId: userId }
                });
                setFavorites(response.data);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, [userId]);

    const handleRemoveFavorite = async (bandeId) => {
        try {
            await fetch(API_URL + '/api/removeFavorite', {
                method: 'DELETE',
                credentials: "same-origin",
                body: JSON.stringify({
                    userId: userId,
                    bandeId: bandeId
                }),
            });
            setFavorites(favorites.filter(favorite => favorite.bande_id !== bandeId));
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };

    if (!favorites || favorites[0] === undefined || favorites[0] === null) {
        return <div className={'flex-1 flex-col flex justify-center align-middle items-center p-6 bg-white '}>
            <div className="material-icons text-6xl mx-auto scale-150 text-gray-400" >favorite</div>
            <h2 className={'flex-1 text-center my-auto text-gray-500 text-xl'}>Vous n'avez aucune favorie pour le moment !</h2>
        </div>;
    }
    return
    <ul className="mb-4 mt-4">
        {favorites.map((favorite) => (
            <li key={favorite.bande.id} className="mb-4">
                <h2 className="text-xl font-bold">{favorite.bande.title}</h2>
                <img src={`/images/${favorite.bande.image_prev}`} alt={favorite.bande.title} className="w-full h-auto mb-2" />
                <p>{favorite.bande.content.substring(0, 100)}...</p>
                <button onClick={() => handleRemoveFavorite(favorite.bande_id)}
                    className="px-4 py-2 bg-red-500 mt-4 text-white rounded hover:bg-red-600"
                >
                    Suprimer des favories
                </button>
            </li>
        ))}
    </ul>



};

export default FavoriteBDs;