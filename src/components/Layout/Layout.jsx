import React, { useContext } from 'react';
import styles from './styles.module.css'; 
import { ThemeContext } from '../../helpres/context/ThemeContext';

const Layout = ({ children }) => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
            {children}
        </div>
    )
};

export default Layout;