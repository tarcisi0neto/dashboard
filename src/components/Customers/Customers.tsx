import { Card, CardActionArea } from '@mui/material';
import { Avatar } from '../Avatar/Avatar';
import styles from '../Customers/Customers.module.css';

export function Customers() {
    return(
        <div className={styles.container}>
            <div style={{ width: '100%'}}>
                <Card sx={{border: '1px solid #E5E7EB', padding: 3, borderRadius: 6}}>
                    <div className={styles.containerCustomers}>
                        <p className={styles.customersText}>Latest Customers</p>  
                    </div>
                    <CardActionArea>
                        <section>
                            <div className={styles.containerAvatarInfo}>
                                <Avatar />
                                <div className={styles.containerInfoCustomers}>
                                    <span className={styles.name} >Neil Sims</span>
                                    <span className={styles.email}>email@mail.com</span>
                                </div>
                            </div>
                            <div className={styles.containerAmount}>
                                <span className={styles.amount}>$367</span>
                            </div>
                        </section>
                        <section>
                            <div className={styles.containerAvatarInfo}>
                                <Avatar />
                                <div className={styles.containerInfoCustomers}>
                                    <span className={styles.name} >Neil Sims</span>
                                    <span className={styles.email}>email@mail.com</span>
                                </div>
                            </div>
                            <div className={styles.containerAmount}>
                                <span className={styles.amount}>$367</span>
                            </div>
                        </section>
                        <section>
                            <div className={styles.containerAvatarInfo}>
                                <Avatar />
                                <div className={styles.containerInfoCustomers}>
                                    <span className={styles.name} >Neil Sims</span>
                                    <span className={styles.email}>email@mail.com</span>
                                </div>
                            </div>
                            <div className={styles.containerAmount}>
                                <span className={styles.amount}>$367</span>
                            </div>
                        </section>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}