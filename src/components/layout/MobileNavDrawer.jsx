import React, { useEffect } from 'react';
import CategoryList from './CategoryList';

const MobileNavDrawer = ({ isOpen, onClose, selectedCategory, onSelectCategory }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 lg:hidden">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-(--color-bg-primary) border-r border-(--color-border) shadow-xl flex flex-col">
                <div className="p-6 border-b border-(--color-border) flex justify-between items-center">
                    <h2 className="text-xl font-bold text-(--color-text-primary)">Arghya Logs</h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-(--color-text-secondary) hover:text-(--color-text-primary)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    <div className="mb-2 px-2">
                        <span className="text-xs font-semibold tracking-wider text-(--color-text-secondary) uppercase">
                            Categories
                        </span>
                    </div>
                    <CategoryList
                        selectedCategory={selectedCategory}
                        onSelectCategory={(category) => {
                            onSelectCategory(category);
                            onClose();
                        }}
                        vertical={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileNavDrawer;
