import { memo } from 'react';
import { UsersList } from '../../../components/UsersList/UsersList';

const MainPage = () => (
    <>
        <UsersList />
    </>
);

export default memo(MainPage);
