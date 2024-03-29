import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice= createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{state.push(action.payload)},
        //action.payload == input 
        remove:(state,action)=>{
        return state.filter((item)=>item.id!==action.payload)
        }
    }
}
)
export const{add,remove}=CounterSlice.actions;
export default CounterSlice.reducer;
//alwaays export what ur making
// const initialState={
//     value:0,
// }
// export const CounterSlice= createSlice({
//     name:"counter",
//     initialState,
//     reducers:{
//         increment:(state)=>{state.value+=1;},
//         decrement:(state)=>{state.value-=1;}
//     }
// }
// )