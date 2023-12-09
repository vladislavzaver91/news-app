import { formatTimeAgo } from "../../helpres/formatTimeAgo";
import { useTheme } from "../../helpres/hooks/useTheme";
import styles from './styles.module.css'; 

const NewsItem = ({ item }) => {
    const { isDark } = useTheme();

    return (
        <li className={`${styles.item} ${isDark ? styles.dark : ''}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                <div className={styles.itemWrapper}>
                    <div
                        className={styles.wrapper}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.extra}>
                            {formatTimeAgo(item.published)} by {item.author}
                        </p>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default NewsItem;