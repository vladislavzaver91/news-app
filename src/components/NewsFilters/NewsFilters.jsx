import { useFetch } from "../../helpres/hooks/useFetch";
import { getCategories } from "../../services/apiNews";
import Slider from '../Slider/Slider'
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from './styles.module.css'; 
import { useTheme } from "../../helpres/hooks/useTheme";

const NewsFilters = ({ filters, changeFilter }) => {
    const { isDark } = useTheme();
    const { data: dataCategories } = useFetch(getCategories);
    return (
        <div className={styles.filters}>
            {dataCategories ? (
                <Slider isDark={isDark}>
                    <Categories
                        categories={dataCategories.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => changeFilter('category', category)}
                    />
                </Slider>
                
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />
        </div>
    );
};

export default NewsFilters;