import { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css'; 

const ScrollTopButton = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 400 ? setShowScrollToTop(true) : setShowScrollToTop(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`${styles.scrollTopBtn} ${showScrollToTop ? styles.show : styles.hide}`}
            onClick={scrollToTop}
        >
            <IoIosArrowUp className={styles.scrollTopIcon} />
        </button>
    );
};

export default ScrollTopButton;