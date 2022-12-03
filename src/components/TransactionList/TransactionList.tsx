import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { TableTransaction } from "../TableTransaction/TableTransaction";
import styles from '../TransactionList/TransactionList.module.css';

export function TransactionList() {
    return (
        <div style={{ width: '100%'}}>
            <Card sx={{border: '1px solid #E5E7EB', padding: 3, borderRadius: 6}}>
                <div className={styles.container}>
                    <p className={styles.text}>Transaction</p>  
                    <span className={styles.subText}>This is a list of latest transaction</span>
                </div>
                <CardActionArea sx={{height: '28rem', overflow: "hidden", overflowY: "scroll"}}>
                    <TableTransaction />
                </CardActionArea>
            </Card>
        </div>
    )
}