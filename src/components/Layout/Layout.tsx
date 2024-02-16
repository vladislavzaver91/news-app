import React  from 'react';
import styles from './styles.module.css'; 
import { useTheme } from '../../helpres/hooks/useTheme';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const { isDark } = useTheme();
    return (
        <div className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
            {children}
        </div>
    )
};

export default Layout;