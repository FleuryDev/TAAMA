import React, {
    useEffect,
    useState,
} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { API_URL } from '../../../../configApi';
import Pagination from './Pagination';

const BDList = () => {
    const [bds, setBDs] = useState(null);
    const [categories, setCategories] = useState([]);

    const [viewMode, setViewMode] = useState('grid'); // 'list' or 'grid'

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalCount, setTotalCount] = useState(0);
    const [filters, setFilters] = useState({
        category: '',
        sortBy: 'created_at',
        order: 'desc',
        limit: limit
    });
    useEffect(() => {
        fetchBDs();
        fetchCategories();
    }, [filters, page]);
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    const fetchBDs = async () => {
        try {
            const response = await axios.get(API_URL + `/api/bds?page=${page}`, { params: filters });
            const { totalCount, articles } = response.data
            setBDs(articles);
            setTotalCount(totalCount);
        } catch (error) {
            console.error('Error fetching BDs:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(API_URL + '/api/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    const toggleViewMode = () => {
        setViewMode(prevMode => prevMode === 'list' ? 'grid' : 'list');
    };

    if (!bds) {
        return <div className={"flex-1 mx-auto text-lg text-blue-500 p-4 text-center"}>Chargement...</div>
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Bandes Dessinées</h1>

            <div className="mb-6 flex flex-wrap items-center gap-4">
                <select
                    name="category"
                    onChange={handleFilterChange}
                    value={filters.category}
                    className="p-2 border rounded-md"
                >
                    <option value="">Toutes les catégories</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.title}</option>
                    ))}
                </select>

                <select
                    name="sortBy"
                    onChange={handleFilterChange}
                    value={filters.sortBy}
                    className="p-2 border rounded-md"
                >
                    <option value="created_at">Date</option>
                    <option value="popularity">Popularité</option>
                </select>

                <select
                    name="order"
                    onChange={handleFilterChange}
                    value={filters.order}
                    className="p-2 border rounded-md"
                >
                    <option value="desc">Décroissant</option>
                    <option value="asc">Croissant</option>
                </select>

                <button
                    onClick={toggleViewMode}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    {viewMode === 'list' ? 'Vue Grille' : 'Vue Liste'}
                </button>
            </div>

            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}`}>
                {bds.map(bd => (
                    <div key={bd.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}>
                        <img src={bd.cover_image}
                            alt={bd.title}
                            className={`${viewMode === 'list' ? 'w-48 h-auto object-cover' : 'w-full h-64 object-cover'}`}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{bd.title}</h2>
                            <p className="text-gray-600 mb-2">{bd.content}</p>
                            <p className="text-gray-600 mb-2">Catégorie: {bd.category}</p>
                            <p className="text-gray-600 mb-2"><span className="material-icons">globe_book</span> Date: {new Date(bd.created_at).toLocaleDateString()}</p>
                            <p className="text-gray-600 mb-2"><span className="material-icons">money</span>Price: ${bd.price}</p>
                            <p><span className="material-icons">bookmark_added</span> {bd.state ? 'Available' : 'Not Available'} <span className={`material-icons ${bd.state ? ' text-green-600' : 'text-red-600'}`}>  {bd.state ? `check_circle` : 'close'}</span> </p>
                            {viewMode === 'list' && <p className="text-gray-700">{bd.summary}</p>}
                            <div className="bd-action">
                                <Link to={`get/${bd.slug}`}>Acheter</Link >
                                <Link to={`${bd.slug}`}>Lire un extrait</Link >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                page={page}
                limit={limit}
                totalCount={totalCount}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default BDList;