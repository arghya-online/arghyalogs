import React from 'react';
import CategoryList from './CategoryList';

const TabletCategoryBar = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="hidden md:block lg:hidden w-full border-b border-(--color-border) bg-(--color-bg-primary) px-4 py-2 sticky top-[60px] z-10">
            <CategoryList
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
                vertical={false}
            />
        </div>
    );
};

export default TabletCategoryBar;
