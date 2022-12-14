import React, { useEffect } from 'react';
import { userActions } from '../store/slices/userSlice/userSlice';
import { AppRouter } from './providers/router';
import initialUsers from '../mockData/initData.json';
import { useAppDispatch } from '../shared/hooks/useAppDispatch';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.setUsers(initialUsers));
    }, [dispatch]);

    return (
        <div className="App">
            <AppRouter />
        </div>
    );
}

export default App;
