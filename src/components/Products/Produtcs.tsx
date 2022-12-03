import { Card, CardActionArea } from '@mui/material';
import { environment } from '../../environments/environments';
import { useFecth } from '../../hooks/useFecth';
import { ProductsModel } from '../../Models/Products.model';
import styles from '../Products/Products.module.css';

export function Products() {

    const { data: products, isFetching, error } = useFecth<ProductsModel[]>(`${environment.url}/products`)


    return (
        <div className={styles.container}>
            <div style={{ width: '100%'}}>
                <Card sx={{border: '1px solid #E5E7EB', padding: 3, borderRadius: 6}}>
                    <div className={styles.containerProducts}>
                        <p className={styles.productsText}>Top Products</p>  
                    </div>
                    <CardActionArea sx={{height: '28rem', overflow: "hidden", overflowY: "scroll"}}>
                        {products?.map(products => {
                            return (
                                <section>
                                    <div className={styles.containerInfoCustomers}>
                                        <span className={styles.name} >{products.name}</span>
                                        <span className={styles.tools}>{products.description}</span>
                                    </div>
                                    <div className={styles.containerAmount}>
                                        <span className={styles.sales}>{products.totalSales}<span> sales</span></span>
                                    </div>
                                </section>

                            )
                        } )}
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}