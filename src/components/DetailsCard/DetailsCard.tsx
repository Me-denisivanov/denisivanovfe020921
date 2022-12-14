import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../../shared/ui/Avatar/Avatar';
import { Card } from '../../shared/ui/Card/Card';
import { User } from '../../store/slices/userSlice/types/userTypes';
import './DetailsCard.css';

interface DetailsCardProps {
    infoUser: User
}

export const DetailsCard = ({ infoUser }: DetailsCardProps) => {
    const navigate = useNavigate();

    const goBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <Card>
            <div className="button_back">
                <button type="submit" onClick={goBack}>Go Back</button>
            </div>

            <div className="card_photo">
                <div>
                    <Avatar size={65} radius={50} src={require(`../../shared/assets/images/${infoUser.photo}`)} alt={infoUser.name} />
                </div>
                <div>
                    <h6 className="user_details_name">{infoUser.name}</h6>
                    <p>{infoUser.position}</p>
                </div>
            </div>
            <div className="card_details_info">
                <ul>
                    <li>
                        <b>Phone</b>
                        {' '}
                        <span>{infoUser.phone}</span>
                    </li>
                    <li>
                        <b>Email</b>
                        {'  '}
                        <span>{infoUser.email}</span>
                    </li>
                </ul>
                <div className="card_details_button">
                    <button type="submit">Send message</button>
                </div>
            </div>
        </Card>
    );
};
