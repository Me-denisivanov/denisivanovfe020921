import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
