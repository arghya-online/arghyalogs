import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const TopBar = ({ onMenuClick, onSearchClick }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-20 w-full bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)] lg:border-none lg:bg-transparent lg:backdrop-blur-none px-4 py-3 flex items-center justify-between lg:justify-end">
            <button
                onClick={onMenuClick}
                className="lg:hidden p-2 -ml-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                aria-label="Open menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            <span className="lg:hidden font-bold text-[var(--color-text-primary)]">
                Arghya Logs
            </span>

            <div className="flex items-center space-x-4">
                <button
                    onClick={onSearchClick}
                    className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="Search"
                    title="Search (Ctrl+K)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>

                <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] hidden sm:inline">Theme</span>
                    <button
                        onClick={toggleTheme}
                        className={`
              relative inline-flex h-6 w-11 shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none
              ${theme === 'dark' ? 'bg-[var(--color-text-primary)]' : 'bg-gray-300'}
            `}
                        aria-label="Toggle theme"
                    >
                        <span
                            className={`
                pointer-events-none inline-block h-5 w-5 transform bg-[var(--color-bg-primary)] shadow ring-0 transition duration-200 ease-in-out
                ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}
              `}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
