import { useTheme } from "../../helpres/hooks/useTheme";
import styles from './styles.module.css'; 

const Search = ({ keywords, setKeywords }) => {
    const { isDark } = useTheme();

    return (
        <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
            <input
                type="text"
                value={keywords}
                onChange={(evt) => setKeywords(evt.target.value)}
                className={styles.input}
                placeholder="Search"
            />
        </div>
    );
};

export default Search;