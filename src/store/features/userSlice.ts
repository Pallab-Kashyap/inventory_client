import { createSlice } from "@reduxjs/toolkit";

interface User {
    username: string 
}

const initialState: User = {
    username: ''
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUserContext: (state, action) => {
            state = action.payload.user
            
        }
    }
})

export default userSlice.reducer

export const { addUserContext } = userSlice.actions