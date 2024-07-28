import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState={
    user:false,
    token:localStorage.getItem('loginToken') || null
}


const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        _setUser:(state,action)=>{
            state.token=action.payload
            const decoded=jwtDecode(action.payload)
            state.user=decoded.username
        },
        _loadUser:state=>{
            const token=localStorage.getItem('loginToken')
            if(token){
                const decoded=jwtDecode(token)
                state.token=token
                state.user=decoded.username
            }
        },
        _logout:(state)=>{
            state.user=null
            state.token=null
            localStorage.removeItem('loginToken')
        }
    }
})
export const {_loadUser,_setUser,_logout}=auth.actions
export default auth.reducer