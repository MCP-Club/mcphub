import { FC } from 'react';
import { categories } from './categoryData';

interface CategoryListProps {
    selectedCategory: string | null;
    handleCategoryClick: (category: string) => void;
    categoriesMap: Map<string, number>;
}

export const CategoryList: FC<CategoryListProps> = ({
    selectedCategory,
    handleCategoryClick,
    categoriesMap,
}) => {
    return (
        <div className="w-72 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Categories</h2>
                <div className="space-y-2">
                    {categories.map((category) => {
                        const count = categoriesMap.get(category.name) || 0;
                        if (count === 0) return null;
                        
                        return (
                            <button
                                key={category.name}
                                onClick={() => handleCategoryClick(category.name)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                                    selectedCategory === category.name
                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    {category.icon && <category.icon className="w-4 h-4" />}
                                    <span>{category.name}</span>
                                </div>
                                <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}