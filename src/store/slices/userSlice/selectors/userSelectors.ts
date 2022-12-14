import { RootState } from '../../../index';

export const getUserData = (state: RootState) => state.users?.data;
export const getUsers = (state: RootState) => state.users?.users;
