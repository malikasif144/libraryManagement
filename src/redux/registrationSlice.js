import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    registration:{
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPassword:''
    },
    add:[]
};

  const registerSlice =  createSlice({
    name : "register",
    initialState,
    reducers:{
        setUserRegistration(state,action){
            state.userRegister = {...state.userRegister,...action.payload}
        },
        addBook  (state=initialState,action){
           state.add.push({...action.payload});
        },
        deleteBook  (state,action){
                    let {add} = state;
                    state.add = add.filter((item) => 
                    item.id !== action.payload);
        },
        editBooks(state,action){
            let {add} = state;
            state.add = add.map(item => item.id === action.payload.id ? action.payload : item)
       return state
        }
    }
})
export  const {setUserRegistration,addBook,deleteBook,editBooks} = registerSlice.actions;
export default registerSlice.reducer