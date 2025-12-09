import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, ChevronRight } from 'lucide-react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const menuItems = [
        { path: '/', label: 'ホーム' },
        { path: '/materials', label: '素材について' },
        { path: '/about', label: 'サイトについて' },
    ];

    return (
        <>
            <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-stone-100 transition-colors z-50 relative"
                aria-label="メニュー"
            >
                {isOpen ? <X size={24} className="text-stone-800" /> : <MenuIcon size={24} className="text-stone-800" />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-40"
                    onClick={closeMenu}
                />
            )}

            {/* Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="pt-20 px-6 space-y-6">
                    <nav className="space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMenu}
                                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${location.pathname === item.path
                                    ? 'bg-stone-100 text-stone-900 font-bold'
                                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                                    }`}
                            >
                                <span>{item.label}</span>
                                <ChevronRight size={16} className="text-stone-400" />
                            </Link>
                        ))}
                    </nav>

                    <div className="pt-6 border-t border-stone-100">
                        <p className="text-xs text-stone-400 text-center mb-2">
                            つるしみゅ<br />Loop String Simulator
                        </p>
                        <p className="text-xs text-stone-500 text-center">
                            Produced by <a href="https://x.com/7n038" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 font-bold transition-colors">@7n038</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
