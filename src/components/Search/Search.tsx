import SearchIcon from '@mui/icons-material/Search';
import styles from '../Search/Search.module.css'


export function Search() {
    return (
      <div className={styles.searchContainer}>
        <button>
          <SearchIcon />
        </button>
        <input className={styles.searchInput} type="text"  placeholder='Search'/>
      </div>
    )
}