import {createSlice} from '@reduxjs/toolkit';


const initialState={
    currentUser:0,
    loading:false,
    error:false,
};
const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 0
    },
    reducers: {
        loginStart:(state)=>{
            state.loading=true; 
        },
        loginSuccess:(state,action) =>{
            state.loading=false;
            state.currentUser=action.payload;
    },
    loginFailure:(state)=>{
        state.loading=false;
        state.error=true;
    },
    logout:(state)=>{
        return initialState;
    },
    },
});
export const {loginFailure,loginStart,loginSuccess,logout} = userSlice.actions;

export default userSlice.reducer;