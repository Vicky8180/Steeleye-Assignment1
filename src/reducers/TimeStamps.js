const initialState=[];
const TimeStamps=(state=initialState, action)=>{

switch(action.type){

    case "TIMESTAMPS":
        
    //   console.log(action.payload)
      return action.payload;
     
      default: return state;
}


}
export default TimeStamps