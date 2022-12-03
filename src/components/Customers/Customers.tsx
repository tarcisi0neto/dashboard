import { Card, CardActionArea } from '@mui/material';
import { environment } from '../../environments/environments';
import { useFecth } from '../../hooks/useFecth';
import { CustomersModel } from '../../Models/Customers.model';
import { Avatar } from '@mui/material';
import styles from '../Customers/Customers.module.css';

export function Customers() {

    const { data: customers, isFetching, error } = useFecth<CustomersModel[]>(`${environment.url}/users`)


    return(
        <div className={styles.container}>
            <div style={{ width: '100%'}}>
                <Card sx={{border: '1px solid #E5E7EB', padding: 3, borderRadius: 6}}>
                    <div className={styles.containerCustomers}>
                        <p className={styles.customersText}>Latest Customers</p>  
                    </div>
                    <CardActionArea sx={{height: '28rem', overflow: "hidden", overflowY: "scroll"}}> 
                        {isFetching && <p>Carregando...</p>}
                        {customers?.map(customers => {
                            return (
                                <section>
                                    <div className={styles.containerAvatarInfo}>
                                        <Avatar src={customers.avatar}/>
                                        <div className={styles.containerInfoCustomers}>
                                            <span className={styles.name}>{customers.name}</span>
                                            <span className={styles.email}>{customers.email}</span>
                                        </div>
                                    </div>
                                    <div className={styles.containerAmount}>
                                        <span className={styles.amount}>${customers.lastPurchaseValue}</span>
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