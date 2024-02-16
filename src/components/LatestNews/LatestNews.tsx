import { useFetch } from '../../helpres/hooks/useFetch';
import { INewsApiRes } from '../../interfaces';
import { getLatestNews } from '../../services/apiNews';
import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css'; 

const LatestNews = () => {
    const { data, isLoading } = useFetch<INewsApiRes, null>(getLatestNews);
    
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Latest News</h2>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    );
};

export default LatestNews;