import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { userReducer } from './slices/userSlice/userSlice';

const rootReducer = combineReducers({
    users: userReducer,
});

export function createReduxStore(initialState = {}) {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

const store = createReduxStore();

export default store;

export interface ThunkExtraArg {
    api: AxiosInstance
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
