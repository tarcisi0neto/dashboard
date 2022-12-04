import { Card, CardActionArea } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from '../Sales/Sales.module.css';
import Charts from '../Charts/Charts';




export function Sales() {

    return (
      <div style={{ width: '100%'}}>
        <Card sx={{border: '1px solid #E5E7EB', padding: 3, borderRadius: 6}}>
            <div className={styles.containerSalesInfo}>
                <p className={styles.salesText}>Sale</p>  
                <span><ErrorOutlineIcon fontSize='small'/></span>
            </div>
            <CardActionArea>
              <Charts />
            </CardActionArea>
        </Card>
      </div>
    );
}
