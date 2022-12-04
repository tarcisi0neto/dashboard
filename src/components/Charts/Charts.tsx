import { format } from "date-fns";
import {LineChart, Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer} from "recharts";
import { environment } from "../../environments/environments";
import { useFecth } from "../../hooks/useFecth";
import { TransactionsModel } from "../../Models/Transaction";



export default function Charts() {

  const { data: transactions, isFetching, error } = useFecth<TransactionsModel[]>(`${environment.url}/transactions`)

  const data = transactions?.map(res => { 
    let date = new Date(res.createdAt);
    const formatDate = format(date, "MMM , d, yyyy");
    res.createdAt = formatDate;
    return res
  
  });

    
    return (
      
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >

            <XAxis dataKey="createdAt" tick={{ fontSize: '0.7rem'}} />
            <YAxis tickFormatter={tick => `$${[tick]}` } domain={[0,1500]} tick={{ fontSize: '0.7rem'}}/>
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#0E9F6E" fill="#0E9F6E" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
