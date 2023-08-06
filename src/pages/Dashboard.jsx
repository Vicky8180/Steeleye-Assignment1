import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import Card from "../component/card/Card";
import SearchDisplay from '../component/search/SearchDisplay'



// Styles
import styles from "./Dashboard.module.css";
import "./Dashboard.module.css"

const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  const [searchText, setSearchText] = useState("q");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  

// State-Management
  const selector = useSelector((state) => state.AddtoCard);
  const selector2 = useSelector((state) => state.Timestamps);




// Adding timestamps to MockData

for( let i=0;i<6;i++){
  var t1=timestamps.results[i].timestamps
  mockData.results[i]["timestamps"]=t1;
}

//To remove console warning , its required to have unique data

for( let i=0;i<6;i++){
  mockData.results[i]["unique"]=(i+1)*8;
  // mockData.results
}

// Search Functionality
const newData=[];
mockData.results.map(item=>{
 if( item["&id"].toLowerCase().includes(searchText.toLowerCase())){
    newData.push(item);
 }
})



  useEffect(() => {
    setSelectedOrderDetails(selector.executionDetails);
    setSelectedOrderTimeStamps(selector2.timestamps)
  }, [selector.executionDetails, selector2.timestamps]);

  
  
  
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={mockData.results.length} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>

      <div className={styles.content}>
      <SearchDisplay rows={newData}/>

        <div className={styles.section}>




          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
         
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results}  rows2={currency} rows3={timestamps.results} />
      </div>
    </div>
  );
};

export default Dashboard;
