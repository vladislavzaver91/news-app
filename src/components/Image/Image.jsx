import styles from './styles.module.css'; 

const Image = ({ img }) => {
    return (
        <div className={styles.wrapper}>
            {img ? <img src={img} alt="news" className={styles.image} /> : null}
        </div>
    );
};

export default Image;