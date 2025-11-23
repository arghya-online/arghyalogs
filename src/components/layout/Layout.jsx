import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import TabletCategoryBar from './TabletCategoryBar';
import MobileNavDrawer from './MobileNavDrawer';
import SearchPalette from '../Shared/SearchPalette';

const Layout = ({ children, selectedCategory, onSelectCategory }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
            if (e.key === 'Escape') {
                setIsSearchOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-300">
            <SearchPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <Sidebar
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
            />

            <MobileNavDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
            />

            <div className="lg:pl-64 flex flex-col min-h-screen">
                <TopBar
                    onMenuClick={() => setIsMobileMenuOpen(true)}
                    onSearchClick={() => setIsSearchOpen(true)}
                />

                <TabletCategoryBar
                    selectedCategory={selectedCategory}
                    onSelectCategory={onSelectCategory}
                />

                <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
