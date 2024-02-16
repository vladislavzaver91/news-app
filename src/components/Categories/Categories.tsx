import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.css'; 
import { TypeCategories } from '../../interfaces';

interface Props {
    categories: TypeCategories[];
    setSelectedCategory: (category: TypeCategories | null) => void;
    selectedCategory: TypeCategories | null;
}

const Categories = forwardRef(
    ({ categories, setSelectedCategory, selectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div ref={ref} className={styles.categories}>
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={!selectedCategory ? styles.active : styles.item}
                >
                    All
                </button>
                {categories.map(category => {
                    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
                    return (
                        <button
                            onClick={() => setSelectedCategory(category)}
                            className={selectedCategory === category ? styles.active : styles.item}
                            key={category}
                        >
                            {capitalizedCategory}
                        </button>
                    )
                })}
            </div>
        );
    }
);

Categories.displayName = 'Categories'

export default Categories;