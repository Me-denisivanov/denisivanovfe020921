import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsCard } from '../../../components/DetailsCard/DetailsCard';
import { getNickUser } from '../../../shared/helpers/getNickUser';
import { useAppSelector } from '../../../shared/hooks/useAppSelector';
import { getUserData } from '../../../store/slices/userSlice/selectors/userSelectors';

const DetailsPage = () => {
    const userData = useAppSelector(getUserData);

    const { id } = useParams();

    const indexUser = getNickUser(userData, id || '');
    const infoUser = userData[indexUser];

    return (
        <>
            {infoUser && (
                <DetailsCard infoUser={infoUser} />
            )}
        </>
    );
};

export default memo(DetailsPage);
