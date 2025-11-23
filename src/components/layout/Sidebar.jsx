import React from 'react';
import CategoryList from './CategoryList';

const Sidebar = ({ selectedCategory, onSelectCategory }) => {
    return (
        <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-[var(--color-border)] bg-[var(--color-bg-primary)] z-10">
            <div className="p-6">
                <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                    Arghya Logs
                </h1>
            </div>

            <div className="flex-1 overflow-y-auto py-4 pr-2">
                <div className="px-6 mb-2">
                    <span className="text-xs font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
                        Categories
                    </span>
                </div>
                <div className="pr-4">
                    <CategoryList
                        selectedCategory={selectedCategory}
                        onSelectCategory={onSelectCategory}
                        vertical={true}
                    />
                </div>
            </div>

            <div className="p-6 border-t border-[var(--color-border)]">
                <p className="text-xs text-[var(--color-text-secondary)]">
                    © {new Date().getFullYear()} Arghya Logs
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
