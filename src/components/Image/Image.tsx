import styles from './styles.module.css'; 
import defaultImage from '../../images/default-img.jpg'

interface Props {
    img: string;
}

const Image = ({ img }: Props) => {
    return (
        <div className={styles.wrapper}>
            {img !== 'None' ? (
                <img src={img} alt="news" className={styles.image} />
            ) : (
                <img src={defaultImage} alt="news" className={styles.image} />
            )}
        </div>
    );
};

export default Image;