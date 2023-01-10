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
        addBook : (state,action) =>{
           state.add.push({...action.payload});
        },
        deleteBook : (state,action) =>{
            const exist = state.add.find((x) => x.id === action.payload);
            if (exist) {
              return state.add.filter((item) => item.id !== exist.id);
              //  state.filter((item) => item.id !== exist.id);
            }
        }
    }
})
export  const {setUserRegistration,addBook,deleteBook} = registerSlice.actions;
export default registerSlice.reducer