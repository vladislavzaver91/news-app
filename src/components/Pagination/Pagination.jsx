import { useTheme } from "../../helpres/hooks/useTheme";
import styles from './styles.module.css'; 

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage, handlePageClick }) => {
    const { isDark } = useTheme();
    
    return (
        <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
            <button
                onClick={handlePrevPage}
                className={`${styles.arrow} ${currentPage <= 1 ? styles.active : ''}`}
            >
                {'<'}
            </button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return (
                        <button
                            onClick={() => handlePageClick(index + 1)}
                            key={index}
                            className={`${styles.pageNumber} ${index + 1 === currentPage ? styles.active : ''}`}>
                            {index + 1}
                        </button>
                    );
                })}
            </div>
            
            <button
                onClick={handleNextPage}
                className={`${styles.arrow} ${currentPage >= totalPages ? styles.active : ''}`}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;