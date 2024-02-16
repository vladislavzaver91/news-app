import { useFetch } from "../../helpres/hooks/useFetch";
import { getCategories } from "../../services/apiNews";
import Slider from '../Slider/Slider'
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from './styles.module.css'; 
import { useTheme } from "../../helpres/hooks/useTheme";
import { ICategoriesApiRes, IFilters } from "../../interfaces";

interface Props {
    filters: IFilters; 
    changeFilter: (key: string, value: string | number | null) => void
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
    const { isDark } = useTheme();
    const { data: dataCategories } = useFetch<ICategoriesApiRes, null>(getCategories);
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