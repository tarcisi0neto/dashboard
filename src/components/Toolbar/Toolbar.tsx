import logo from '../../assets/logo.svg'
import styles from '../Toolbar/Toolbar.module.css';
import { Search } from '../Search/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

import avatarProfile from '../../assets/Avatar.png';
import { Avatar } from '@mui/material';



export function Toolbar() {
    return (
        <div className={styles.container}>
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
                         <Avatar src={avatarProfile} />
                    </div>
                </div>
            </header>
        </div>
    )
}