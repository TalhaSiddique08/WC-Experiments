import React from 'react';
import { ShoppingCart } from 'lucide-react';

const BookCard = ({ book, addToCart }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden">
            <img 
                src={book.coverUrl} 
                alt={`Cover of ${book.title}`} 
                className="w-full h-80 object-cover border-b border-gray-100" 
                // Fallback image in case the remote URL fails
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src="https://placehold.co/300x450/cccccc/333333?text=Cover+Not+Found";
                }}
            />
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug truncate hover:whitespace-normal">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-extrabold text-red-600">${book.price.toFixed(2)}</span>
                    <span className="text-xs font-semibold text-white bg-gray-600 px-3 py-1 rounded-full uppercase tracking-wider">{book.genre}</span>
                </div>
                <button 
                    onClick={() => addToCart(book)}
                    className="w-full flex items-center justify-center bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                    <ShoppingCart size={18} className="mr-2" /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookCard;
