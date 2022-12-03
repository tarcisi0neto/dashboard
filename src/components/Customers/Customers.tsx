import { Card, CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from '../Customers/Customers.module.css';

export function Customers() {

    type Customers = {
        name: string,
        email: string,
        lastPurchaseValue: string
    }

    const [customers, setCustomers] = useState<Customers[]>([])
    
    useEffect(() => {}, [])

    useEffect(() => {
        fetch('https://633740935327df4c43d22bb2.mockapi.io/api/v1/users')
        .then(res => res.json())
        .then(data => {
            setCustomers(data);
        })
    }, [])

    return(
        <div className={styles.container}>
            <div style={{ width: '100%'}}>
                <Card sx={{border: '1px solid #E5E7EB', padding: 3, borderRadius: 6}}>
                    <div className={styles.containerCustomers}>
                        <p className={styles.customersText}>Latest Customers</p>  
                    </div>
                    <CardActionArea 
                        sx={{
                            height: '28rem',
                            overflow: "hidden",
                            overflowY: "scroll",
                          }}
                    >
                        {customers.map(customers => {
                            return (
                                <section>
                                    <div className={styles.containerAvatarInfo}>
                                        <Avatar />
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