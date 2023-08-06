import ListRow from "../list/ListRow";
import ListRowCell from "../list/ListRowCell";
import ListHeader from "../list/ListHeader";
import ListHeaderCell from "../list/ListHeaderCell";
import styles from "../list/List.module.css";

const List = ({ rows}) => {

    if (rows.length===0) return null;
  return (
    <>
    <table className={styles.container}>
    
      <thead>
      <tr>
      <th rowSpan="1">Search Results</th>
    </tr>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
      
          
          <ListRow  key={row.unique}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>

          </ListRow>
          
        
          
        ))}
      </tbody>
    </table>
    </>
  );
};

export default List;
