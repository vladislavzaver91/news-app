import styles from './styles.module.css'; 
import { useTheme } from "../../helpres/hooks/useTheme";

const Footer = () => {
    const { isDark } = useTheme();

    return (
        <footer className={`${styles.footer} ${isDark ? styles.dark : styles.light}`}>
            <p className={styles.signature}>VladZaver2023&#169;</p>
        </footer>
    );
};

export default Footer;