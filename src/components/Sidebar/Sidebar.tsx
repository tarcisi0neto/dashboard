import { Menubar } from "../Menu/Menu";
import { Toolbar } from "../Toolbar/Toolbar";
import styles from '../Sidebar/Sidebar.module.css';

export function Sidebar() {
    return(
        <div className={styles.container}>
            <Toolbar />
            <Menubar />
        </div>
    )
}