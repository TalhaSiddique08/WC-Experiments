import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, ArrowRight, BookOpen } from 'lucide-react';

// --- Sample Book Data ---
const initialBooks = [
    { id: 1, title: "The AI Revolution: Future of Intelligence", author: "Dr. Samantha Lee", price: 24.99, genre: "Tech", coverUrl: "https://picsum.photos/seed/ai-rev/300/450" },
    { id: 2, title: "The Silent City", author: "Alex J. Thorne", price: 15.50, genre: "Mystery", coverUrl: "https://picsum.photos/seed/silent-city/300/450" },
    { id: 3, title: "Mindful Habits: A Guide to Peace", author: "Chloe P. Reed", price: 22.00, genre: "Self-Help", coverUrl: "https://picsum.photos/seed/mindful/300/450" },
    { id: 4, title: "History of Code: From Assembly to AI", author: "R. S. Johnson", price: 29.75, genre: "History", coverUrl: "https://picsum.photos/seed/code-hist/300/450" },
    { id: 5, title: "Cosmic Drift: A Space Odyssey", author: "Dr. Elara Chen", price: 32.75, genre: "Sci-Fi", coverUrl: "https://picsum.photos/seed/cosmic/300/450" },
    { id: 6, title: "Ultimate Recipe Compendium", author: "Chef Isabella", price: 28.99, genre: "Food", coverUrl: "https://picsum.photos/seed/recipes/300/450" },
];

// --- Sub-Component: BookCard (Integrated for reliable compilation) ---
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

// --- Sub-Component: Header ---
const Header = ({ cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-3xl font-extrabold text-indigo-800 tracking-tight flex items-center">
                    <BookOpen size={28} className="mr-2 text-red-600" />
                    LiteraryHub
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
                    <a href="#" className="hover:text-red-600 transition duration-200">Fiction</a>
                    <a href="#" className="hover:text-red-600 transition duration-200">Non-Fiction</a>
                    <a href="#" className="hover:text-red-600 transition duration-200">New Releases</a>
                    <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition shadow-md">
                        <ShoppingCart size={18} className="mr-2" />
                        Cart ({cartCount})
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-600 hover:text-red-600 p-2" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden p-4 bg-gray-50 border-t border-gray-200">
                    <nav className="flex flex-col space-y-3 text-gray-700">
                        <a href="#" className="py-1 hover:text-red-600">Fiction</a>
                        <a href="#" className="py-1 hover:text-red-600">Non-Fiction</a>
                        <a href="#" className="py-1 hover:text-red-600">New Releases</a>
                        <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg justify-center">
                            <ShoppingCart size={18} className="mr-2" />
                            Cart ({cartCount})
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- Sub-Component: Hero ---
const Hero = () => (
    <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Opacity for text readability (Using an external image URL) */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('https://picsum.photos/seed/library-hero/1600/600')" }}
        ></div>
        
        <div className="relative container mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                Find Your Next Great Read
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
                Explore thousands of titles from award-winning authors.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto flex bg-white rounded-full p-1 shadow-2xl">
                <input
                    type="search"
                    placeholder="Search by title, author, or keyword..."
                    className="w-full text-gray-800 p-3 pl-6 rounded-l-full focus:outline-none"
                />
                <button className="bg-red-600 text-white p-3 md:p-4 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105">
                    <Search size={24} />
                </button>
            </div>
            
        </div>
    </div>
);

// --- Sub-Component: Footer ---
const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-8">
                
                <div className="col-span-2">
                    <h3 className="text-xl font-bold text-white mb-3">LiteraryHub</h3>
                    <p className="text-sm">The best online collection for fiction and non-fiction. Start reading today.</p>
                </div>

                <div>
                    <h4 className="font-bold text-red-400 mb-3">Shop</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">All Books</a></li>
                        <li><a href="#" className="hover:text-white">Gift Cards</a></li>
                        <li><a href="#" className="hover:text-white">Sale</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-red-400 mb-3">Help</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-red-400 mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                    </ul>
                </div>

            </div>
            <p className="text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} LiteraryHub. All rights reserved.
            </p>
        </div>
    </footer>
);


// --- Main Application Component ---
const App = () => {
    // State to manage the shopping cart
    const [cart, setCart] = useState([]);
    
    const addToCart = (book) => {
        setCart(prevCart => [...prevCart, book]);
        // Simple log for demonstration, replace with a custom modal UI in production
        console.log(`Added "${book.title}". Cart total: ${cart.length + 1} items.`);
    };
    
    return (
        <div className="min-h-screen bg-white">
            <Header cartCount={cart.length} />
            <main>
                <Hero />
                
                {/* Featured Books Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
                            Editor's Picks & Bestsellers
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {initialBooks.map(book => (
                                <BookCard key={book.id} book={book} addToCart={addToCart} />
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <a href="#" className="inline-flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-300">
                                View All Books <ArrowRight size={20} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;