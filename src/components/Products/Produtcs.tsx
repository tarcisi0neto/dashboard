import { Card, CardActionArea } from '@mui/material';
import styles from '../Products/Products.module.css';

export function Products() {
    return (
        <div className={styles.container}>
            <div style={{ width: '100%'}}>
                <Card sx={{border: '1px solid #E5E7EB', padding: 3, borderRadius: 6}}>
                    <div className={styles.containerProducts}>
                        <p className={styles.productsText}>Top Products</p>  
                    </div>
                    <CardActionArea>
                    <section>
                            <div className={styles.containerInfoCustomers}>
                                <span className={styles.name} >Design System Pro</span>
                                <span className={styles.tools}>React & Bootstrap Framework</span>
                            </div>
                            <div className={styles.containerAmount}>
                                <span className={styles.sales}>367<span> sales</span></span>
                            </div>
                        </section>
                    <section>
                            <div className={styles.containerInfoCustomers}>
                                <span className={styles.name} >Design System Pro</span>
                                <span className={styles.tools}>React & Bootstrap Framework</span>
                            </div>
                            <div className={styles.containerAmount}>
                                <span className={styles.sales}>367<span> sales</span></span>
                            </div>
                        </section>
                    <section>
                            <div className={styles.containerInfoCustomers}>
                                <span className={styles.name} >Design System Pro</span>
                                <span className={styles.tools}>React & Bootstrap Framework</span>
                            </div>
                            <div className={styles.containerAmount}>
                                <span className={styles.sales}>367<span> sales</span></span>
                            </div>
                        </section>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}