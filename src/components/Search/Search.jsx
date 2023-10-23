import styles from './styles.module.css'; 

const Search = ({ keywords, setKeywords }) => {
    return (
        <div className={styles.search}>
            <input
                type="text"
                value={keywords}
                onChange={(evt) => setKeywords(evt.target.value)}
                className={styles.input}
                placeholder="Javascript"
            />
        </div>
    );
};

export default Search;