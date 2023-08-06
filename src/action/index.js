export const AddToCard_Action=(inserting)=>{
    return{
        type:"INSERT",
        payload:inserting
    }
}
export const Add_Timestamps_Action=(inserting)=>{
    return {
        type:"TIMESTAMPS",
        payload:inserting
    }
}