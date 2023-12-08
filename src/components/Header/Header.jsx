import { formatDate } from "../../helpres/formatDate";
import { MdLightMode, MdDarkMode  } from "react-icons/md";
import styles from './styles.module.css'; 
import { useTheme } from "../../helpres/hooks/useTheme";

const Header = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
            <div className={styles.infoWrapper}>
                <h1 className={styles.title}>NEWS APP</h1>
                <p className={styles.date}>{formatDate(new Date())}</p>
            </div>
            <button
                onClick={toggleTheme}
                className={styles.themeToggleBtn}>
                {isDark ? (
                    <MdLightMode className={styles.sunIcon} style={{ color: '#f6f7f9' }} />
                ) : (
                    <MdDarkMode className={styles.moonIcon} />
                )}
            </button>
        </header>
    );
};

export default Header;