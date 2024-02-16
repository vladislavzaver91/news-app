import { formatTimeAgo } from "../../helpres/formatTimeAgo";
import { useTheme } from "../../helpres/hooks/useTheme";
import defaultImg from '/src/images/default-img.jpg';
import styles from './styles.module.css'; 
import { INews } from "../../interfaces";

interface Props {
    item: INews;
}

const NewsItem = ({ item }: Props) => {
    const { isDark } = useTheme();

    const backgroundImage = item.image && item.image !== 'None' ? `url(${item.image})` : `url(${defaultImg})`;

    return (
        <li className={`${styles.item} ${isDark ? styles.dark : ''}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                <div className={styles.itemWrapper}>
                    <div
                        className={styles.wrapper}
                        style={{ backgroundImage: backgroundImage }}
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