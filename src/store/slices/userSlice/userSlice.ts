import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from './types/userTypes';

const initialState: UserSchema = {
    data: [],
    users: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers(state, action:PayloadAction<User[]>) {
            state.users = action.payload.slice(0, 3);
            state.data = action.payload;
        },
        setAllUsers(state) {
            state.users = state.data;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
