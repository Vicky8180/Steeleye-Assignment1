var initialState = [];
const AddToCard = (state = initialState, action) => { 

    switch (action.type) {

        case "INSERT":

            let temp2 =action.payload;
            return temp2;
  
    
    default: return state
    }

}
export default AddToCard;