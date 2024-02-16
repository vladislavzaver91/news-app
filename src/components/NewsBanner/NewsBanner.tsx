import { formatTimeAgo } from "../../helpres/formatTimeAgo";
import { useTheme } from "../../helpres/hooks/useTheme";
import { INews } from "../../interfaces";
import Image from "../Image/Image";
import styles from './styles.module.css'; 

interface Props {
    item: INews;
}

const NewsBanner = ({ item }: Props) => {
    const { isDark } = useTheme();

    return (
        <div className={`${styles.banner} ${isDark ? styles.dark : ''}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                <Image img={item?.image} />
                <div className={styles.textWrapper}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.extra}>
                        {formatTimeAgo(item.published)} by {item.author}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default NewsBanner;