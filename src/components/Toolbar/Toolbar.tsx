import logo from '../../assets/logo.svg'
import styles from '../Toolbar/Toolbar.module.css';
import { Search } from '../Search/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '../Avatar/Avatar';



export function Toolbar() {
    return (
        <div>
            <header className={styles.containerHeader}>
                <div className={styles.containerSearch}>
                    <img className={styles.logo} src={logo} alt="" />
                    <Search />
                </div>
                <div className={styles.containerProfile}>
                    <div className={styles.notification}>
                        <NotificationsIcon />
                    </div>
                    <div className={styles.avatar}>
                        <Avatar />
                    </div>
                </div>
            </header>
        </div>
    )
}