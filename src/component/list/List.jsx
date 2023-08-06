import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import { useDispatch } from 'react-redux';
import { AddToCard_Action, Add_Timestamps_Action } from "../../action";

import styles from "./List.module.css";

const List = ({ rows ,rows2, rows3}) => {
const dispatch = useDispatch();
function changer(temp){
  // console.log("clicked the row ")
  var tempo=rows3.find((item)=>item["&id"]===temp["&id"])
  dispatch(AddToCard_Action(temp))
  dispatch(Add_Timestamps_Action(tempo))
}


  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {rows2}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
      
          
          <ListRow key={row.unique} onClick={()=>changer(row)}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[rows2]}</ListRowCell>

          </ListRow>
          
        
          
        ))}
      </tbody>
    </table>
  );
};

export default List;
