import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { getUsers } from '../../store/slices/userSlice/selectors/userSelectors';
import { Avatar } from '../../shared/ui/Avatar/Avatar';
import { Card } from '../../shared/ui/Card/Card';
import './UserList.css';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { userActions } from '../../store/slices/userSlice/userSlice';

export const UsersList = memo(
    () => {
        const dispatch = useAppDispatch();
        const users = useAppSelector(getUsers);

        const handleClick = () => {
            dispatch(userActions.setAllUsers());
        };

        return (
            <>
                <h1>asdad</h1>
                {users && users.map((item) => (
                    <Card key={item.phone}>
                        <div className="container">
                            <div>
                                <Avatar size={65} radius={50} src={require(`../../shared/assets/images/${item.photo}`)} alt={item.name} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.nickname}</p>
                            </div>
                            <Link to={`/details/${item.nickname}`}>
                                <button type="submit" className="button_view">View</button>
                            </Link>
                        </div>
                    </Card>
                ))}
                {users.length <= 3
                    && <button data-testid="users-btn" className="button_view_all" type="submit" onClick={handleClick}>View All</button>}
            </>
        );
    },
);
