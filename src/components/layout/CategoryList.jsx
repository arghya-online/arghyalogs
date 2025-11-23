import React from 'react';
import {
    TbHome,
    TbMathFunction,
    TbTelescope,
    TbRobot,
    TbCode
} from 'react-icons/tb';

export const CATEGORIES = [
    'Mathematics',
    'Astronomy',
    'Robotics',
    'Backend',
    'Frontend',
    'Fullstack',
];

const CATEGORY_ICONS = {
    'Take Home': TbHome,
    'Mathematics': TbMathFunction,
    'Astronomy': TbTelescope,
    'Robotics': TbRobot,
    'Backend': TbCode,
    'Frontend': TbCode,
    'Fullstack': TbCode,
};

const CategoryList = ({ selectedCategory, onSelectCategory, vertical = true }) => {
    const allCategories = ['Take Home', ...CATEGORIES];

    return (
        <div className={`flex ${vertical ? 'flex-col space-y-1' : 'flex-row space-x-4 overflow-x-auto pb-2'} w-full`}>
            {allCategories.map((category) => {
                const isTakeHome = category === 'Take Home';
                const isActive = isTakeHome ? selectedCategory === null : selectedCategory === category;
                const Icon = CATEGORY_ICONS[category] || TbMathFunction;

                return (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(isTakeHome ? null : category)}
                        className={`
              group relative flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer
              ${vertical ? 'w-full text-left' : 'whitespace-nowrap'}
              ${isActive
                                ? 'text-(--color-text-primary) bg-(--color-bg-secondary)'
                                : 'text-(--color-text-secondary) hover:bg-(--color-bg-secondary) hover:text-(--color-text-primary)'
                            }
            `}
                    >
                        {vertical && isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-(--color-text-primary)" />
                        )}
                        {vertical && !isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-(--color-border) transition-colors duration-200" />
                        )}
                        <Icon className={`w-4 h-4 mr-3 ${isActive ? 'text-(--color-text-primary)' : 'text-(--color-text-secondary) group-hover:text-(--color-text-primary)'}`} />
                        <span>{category}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryList;
