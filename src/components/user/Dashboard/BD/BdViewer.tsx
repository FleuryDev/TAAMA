import React, {
    useEffect,
    useState,
} from 'react';

import axios from 'axios';

import { API_URL } from '../../../../configApi';
import useAccount from '../../../../Hooks/Auth/useAccount';

const BDViewer = ({ slug }) => {
    const [article, setArticle] = useState(null);
    const [likes, setLikes] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentPerPage] = useState(300); // Number of characters per page
    const { account } = useAccount()
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(API_URL + `/api/bds/${slug}`);
                setArticle(response.data);
                setLikes(response.data.likes || 0); // Assuming the article has a likes field
            } catch (error) {
                console.error('Error fetching BD:', error);
            }
        };

        fetchArticle();
    }, [slug]);

    const handleLike = () => {
        setLikes(likes + 1);
        // Optionally, send a request to the server to update the likes count
    };
    const handleAddFavorite = async () => {
        try {
            const response = await fetch(API_URL + '/api/addFavorite', {
                method: 'POST',
                credentials: "same-origin",
                body: JSON.stringify({
                    userId: account?.id,
                    bandeId: article?.id
                }),
            })

            alert('Added to favorites');
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
    };
    const handleRemoveFavorite = async () => {
        try {
            await fetch(API_URL + '/api/removeFavorite', {
                method: 'DELETE',
                credentials: "same-origin",
                body: JSON.stringify({
                    userId: account?.id,
                    bandeId: article?.id
                }),
            });

        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };

    const handleFavorite = () => {

        if (isFavorite) {
            handleRemoveFavorite()
        }
        if (!isFavorite) {
            handleAddFavorite()
        }
        setIsFavorite(!isFavorite);
        // Optionally, send a request to the server to update the favorite status
    };

    const handlePay = () => {
        // Implement payment logic here
        alert('Payment functionality is not implemented yet.');
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(article.content.length / contentPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (!article) {
        return <div>Loading...</div>;
    }

    const startIndex = (currentPage - 1) * contentPerPage;
    const endIndex = startIndex + contentPerPage;
    const currentContent = article.content.substring(startIndex, endIndex);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <img src={`/images/${article.image_prev}`} alt={article.title} className="w-full h-auto mb-4" />
            <p className="mb-4">{currentContent}</p>
            <p className="text-gray-600 mb-2">Publication Date: {new Date(article.publication_date).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2">Price: ${article.price}</p>
            <p className="text-gray-600 mb-4">{article.state ? 'Available' : 'Not Available'}</p>
            <div className="flex space-x-4 mb-4">
                <button onClick={handleLike} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Like ({likes})
                </button>
                <button onClick={handleFavorite} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
                <button onClick={handlePay} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Pay
                </button>
            </div>
            <div className="flex justify-between items-center">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50">
                    Previous
                </button>
                <span>Page {currentPage} of {Math.ceil(article.content.length / contentPerPage)}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(article.content.length / contentPerPage)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50">
                    Next
                </button>
            </div>
        </div>);
};

export default BDViewer;