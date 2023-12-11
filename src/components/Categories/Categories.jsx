import { forwardRef } from 'react';
import styles from './styles.module.css'; 

const Categories = forwardRef(
    ({ categories, setSelectedCategory, selectedCategory }, ref) => {
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