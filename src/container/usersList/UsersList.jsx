import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersList } from '../../store/users/actions';
import { usersSelector } from '../../store/users/selectors';

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    console.log('users', users)
    useEffect(() => {
        // Pedir la data a la api cuando se monta el componente
        dispatch(usersList());
    }, [dispatch])
    return (
        <div>
            {users.map(user => (
                <div>
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default UsersList;
