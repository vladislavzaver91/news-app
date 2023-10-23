import { useState, useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'; 
import { getCategories, getNews } from '../../services/apiNews';
import { useDebounce } from '../../helpres/hooks/useDebounce';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [keywords, setKeywords] = useState('');
    const totalPages = 10;
    const pageSize = 10;

    const debouncedKeywords = useDebounce(keywords, 1500);
    
    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const res = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === 'All' ? null : selectedCategory,
                keywords: debouncedKeywords,
            });
            setNews(res.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(["All", ...res.categories]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategory, debouncedKeywords]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    
    const handlePageClick = pageNumber => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className={styles.main}>
            <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <Search
                keywords={keywords}
                setKeywords={setKeywords}
            />
            
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton count={1} type={'banner'} />
            )}

            <Pagination
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />

            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton count={10} type={'item'} />
            )}

            <Pagination
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />

        </main>
    );
};

export default Main;