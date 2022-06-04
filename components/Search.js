import styles from '../styles/Home.module.css';

const Search = ({handleInputChange, searchTerm, handleSearch}) => {
  return (
    <div className={styles.search}>
      <input onChange={handleInputChange} value={searchTerm} placeholder="Search"/>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
